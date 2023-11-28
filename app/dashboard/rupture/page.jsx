import Link from "next/link";

import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/rupture/page/rupture.module.css";
import { consultarRompimentos } from "@/app/lib/data";
import OltList from "@/app/ui/dashboard/rupture/oltList";

const RupturePage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {rompimentos,count} = await consultarRompimentos(q, page);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/rupture/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Status</td>
            <td>Quantidade Assinantes</td>
            <td>PON</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {rompimentos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <span
                  className={
                    item.finalizado == false
                      ? `${styles.status} ${styles.pending}`
                      : `${styles.status} ${styles.done}`
                  }
                >
                  {item.finalizado == true ? "Done" : "Pending"}
                </span>
              </td>
              <td>{item.quantidade_assinantes}</td>
              <td className={styles.PON}>
                {Object.keys(item.infoPON).map((olt) => {
                  if (item.infoPON[olt].length > 0) {
                    return (
                      <div key={olt} className={olt}>
                        <span className={styles.oltName}>{olt}</span>
                        <OltList list={item.infoPON[olt]} />
                      </div>
                    );
                  }
                })}
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {item.finalizado == false ? (
                    <Link href={`/dashboard/rupture/${item.id}`}>
                      <button className={`${styles.button} ${styles.edit}`}>
                        Edit
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
export default RupturePage;
