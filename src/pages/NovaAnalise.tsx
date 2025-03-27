import Header from "../../src/components/header";
import Title from "../../src/components/title";
import Layout from "../../src/components/layout";
import LabTabs from "../components/tabs";
import AbaVincularPartida from "../components/aba_vincular_partida";
import AbaPartidas from "../components/aba_partidas";

function NovaAnalise(props: NovaAnaliseProps) {
  //const {} = props;
  return (
    <div className="flex flex-col align-center">
      <Header />
      <Layout>
        <Title title="Nova análise" showBackButton />

        <LabTabs
          titleOne="Vincular a uma partida"
          titleTwo="Criar partida"
          contentOne={<AbaVincularPartida />}
          contentTwo={<AbaPartidas />}
        />
      </Layout>
    </div>
  );
}
interface NovaAnaliseProps {
  // sigla: string;
  // pais: string;
}

export default NovaAnalise;
