import Image from "next/image";
import styles from "./rupture.module.css";
import { consultarRompimentos } from "@/app/lib/data";
import {format} from 'date-fns';

const Rupture = async () => {
  const romps = await consultarRompimentos();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rompimentos</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Aberto Por</td>
            <td>ID</td>
            <td>Status</td>
            <td>Data</td>
            <td>Qntd Clientes</td>
          </tr>
        </thead>
        <tbody>
          {romps.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    width={40}
                    height={40}
                    alt="avatar"
                    className={styles.userImage}
                  />
                  Fulano de Tal
                </div>
              </td>
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
              <td>{format(new Date(item.data_abertura), 'dd/MM/yyyy')}</td>
              <td>{item.quantidade_assinantes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rupture;
