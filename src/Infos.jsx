
import styles from "./composants/style";

function InfosPerso() {
  return (
    <div style={styles.section}>
      <h2 style={styles.titreSection}>
        Informations personnelles
      </h2>

      <p><strong>Nom :</strong> Fatou Diouck</p>
      <p><strong>Formation :</strong> Licence Génie Logiciel</p>
      <p><strong>Ville :</strong> Dakar</p>
      <p><strong>Email :</strong> diouckmamyfatou@gmail.com</p>
    </div>
  );
}

export default InfosPerso;