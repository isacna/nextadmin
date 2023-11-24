import styles from "@/app/ui/dashboard/rupture/page/singleRupture/rupture.single.module.css";

const SingleRupturePage = async ({ params }) => {
    const { id } = params;

    return (
        <div className={styles.container}>
            
            <div className={styles.formContainer}></div>
        </div>
    );
}

export default SingleRupturePage;