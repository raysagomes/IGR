import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab12() {
    return(
<>
<Helmet>
        <title>Membros da família</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Membros da família</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Adult</Col>
        <Col className="borderedCol">Ádolt</Col>
        <Col className="borderedCol">Adulto</Col>
        <AudioPlayerVocab
          text="Adult"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Aunt</Col>
        <Col className="borderedCol">Ent</Col>
        <Col className="borderedCol">Tia</Col>
        <AudioPlayerVocab
          text="Aunt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Baby</Col>
        <Col className="borderedCol">Bêibi</Col>
        <Col className="borderedCol">Bebê</Col>
        <AudioPlayerVocab
          text="Baby"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Boy</Col>
        <Col className="borderedCol">Bói</Col>
        <Col className="borderedCol">Menino</Col>
        <AudioPlayerVocab
          text="Boy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Boyfriend</Col>
        <Col className="borderedCol">Bóifruênd</Col>
        <Col className="borderedCol">Namorado</Col>
        <AudioPlayerVocab
          text="Boyfriend"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Brother</Col>
        <Col className="borderedCol">Bródêr</Col>
        <Col className="borderedCol">Irmão</Col>
        <AudioPlayerVocab
          text="Brother"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Brother-In-Law</Col>
        <Col className="borderedCol">Bródêr-în-Lóu</Col>
        <Col className="borderedCol">Cunhado</Col>
        <AudioPlayerVocab
          text="Brother-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Child</Col>
        <Col className="borderedCol">Cháild</Col>
        <Col className="borderedCol">Criança</Col>
        <AudioPlayerVocab
          text="Child"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Children</Col>
        <Col className="borderedCol">Chiudruen</Col>
        <Col className="borderedCol">Crianças</Col>
        <AudioPlayerVocab
          text="Children"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cousin</Col>
        <Col className="borderedCol">Kâzin</Col>
        <Col className="borderedCol">Primo</Col>
        <AudioPlayerVocab
          text="Cousin"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
 </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dad</Col>
        <Col className="borderedCol">Déd</Col>
        <Col className="borderedCol">Pai</Col>
        <AudioPlayerVocab
          text="Dad"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Daughter</Col>
        <Col className="borderedCol">Dórêr</Col>
        <Col className="borderedCol">Filha</Col>
        <AudioPlayerVocab
          text="Daughter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Daughter-In-Law</Col>
        <Col className="borderedCol">Dórêr-în-Lóu</Col>
        <Col className="borderedCol">Nora</Col>
        <AudioPlayerVocab
          text="Daughter-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Family</Col>
        <Col className="borderedCol">Femílí</Col>
        <Col className="borderedCol">Família</Col>
        <AudioPlayerVocab
          text="Family"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Father</Col>
        <Col className="borderedCol">Fó-dêr</Col>
        <Col className="borderedCol">Pai</Col>
        <AudioPlayerVocab
          text="Father"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Father-In-Law</Col>
        <Col className="borderedCol">Fó-dêr-în-Lów</Col>
        <Col className="borderedCol">Sogro</Col>
        <AudioPlayerVocab
          text="Father-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Gentleman</Col>
        <Col className="borderedCol">Gêntou-men</Col>
        <Col className="borderedCol">Cavalheiro</Col>
        <AudioPlayerVocab
          text="Gentleman"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Girl</Col>
        <Col className="borderedCol">Gârl</Col>
        <Col className="borderedCol">Menina</Col>
        <AudioPlayerVocab
          text="Girl"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Girlfriend</Col>
        <Col className="borderedCol">Gârlfruênd</Col>
        <Col className="borderedCol">Namorada</Col>
        <AudioPlayerVocab
          text="Girlfriend"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Grandchildren</Col>
        <Col className="borderedCol">Gruendchîldrên</Col>
        <Col className="borderedCol">Netos</Col>
        <AudioPlayerVocab
          text="Grandchildren"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Granddaughter</Col>
        <Col className="borderedCol">Gruend-dórêr</Col>
        <Col className="borderedCol">Neta</Col>
        <AudioPlayerVocab
          text="Granddaughter"
          voiceName="Microsoft Jenny Online (Natural) - English ( United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Grandfather</Col>
        <Col className="borderedCol">Gruendfódêr</Col>
        <Col className="borderedCol">Avô</Col>
        <AudioPlayerVocab
          text="Grandfather"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Grandmother</Col>
        <Col className="borderedCol">Gruend-módêr</Col>
        <Col className="borderedCol">Avó</Col>
        <AudioPlayerVocab
          text="Grandmother"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Grandparents</Col>
        <Col className="borderedCol">Gruend-peruênts</Col>
        <Col className="borderedCol">Avós</Col>
        <AudioPlayerVocab
          text="Grandparents"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Grandson</Col>
        <Col className="borderedCol">Gruendsân</Col>
        <Col className="borderedCol">Neto</Col>
        <AudioPlayerVocab
          text="Grandson"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Husband</Col>
        <Col className="borderedCol">Hâzbend</Col>
        <Col className="borderedCol">Marido</Col>
        <AudioPlayerVocab
          text="Husband"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Lady</Col>
        <Col className="borderedCol">Lêidî</Col>
        <Col className="borderedCol">Senhora</Col>
        <AudioPlayerVocab
          text="Lady"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Man</Col>
        <Col className="borderedCol">Men</Col>
        <Col className="borderedCol">Homem</Col>
        <AudioPlayerVocab
          text="Man"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Men</Col>
        <Col className="borderedCol">Mên</Col>
        <Col className="borderedCol">Homens</Col>
        <AudioPlayerVocab
          text="Men"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Miss</Col>
        <Col className="borderedCol">Mîss</Col>
        <Col className="borderedCol">Senhorita</Col>
        <AudioPlayerVocab
          text="Miss"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mister</Col>
        <Col className="borderedCol">Mîstêr</Col>
        <Col className="borderedCol">Senhor</Col>
        <AudioPlayerVocab
          text="Mister"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mom</Col>
        <Col className="borderedCol">Môm</Col>
        <Col className="borderedCol">Mamãe</Col>
        <AudioPlayerVocab
          text="Mom"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mother</Col>
        <Col className="borderedCol">Móthêr</Col>
        <Col className="borderedCol">Mãe</Col>
        <AudioPlayerVocab
          text="Mother"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mother-In-Law</Col>
        <Col className="borderedCol">Módêr-în-Lóu</Col>
        <Col className="borderedCol">Sogra</Col>
        <AudioPlayerVocab
          text="Mother-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Neighbor</Col>
        <Col className="borderedCol">Nêibôr</Col>
        <Col className="borderedCol">Vizinho</Col>
        <AudioPlayerVocab
          text="Neighbor"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Nephew</Col>
        <Col className="borderedCol">Nêfíu</Col>
        <Col className="borderedCol">Sobrinho</Col>
        <AudioPlayerVocab
          text="Nephew"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Niece</Col>
        <Col className="borderedCol">Níis</Col>
        <Col className="borderedCol">Sobrinha</Col>
        <AudioPlayerVocab
          text="Niece"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Older</Col>
        <Col className="borderedCol">Ôuldêr</Col>
        <Col className="borderedCol">Mais Velho</Col>
        <AudioPlayerVocab
          text="Older"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Parents</Col>
        <Col className="borderedCol">Pêruêntz</Col>
        <Col className="borderedCol">Pais</Col>
        <AudioPlayerVocab
          text="Parents"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Parents-In-Law</Col>
        <Col className="borderedCol">Pêruêntz-în-Lóu</Col>
        <Col className="borderedCol">Sogros</Col>
        <AudioPlayerVocab
          text="Parents-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">People</Col>
        <Col className="borderedCol">Pîpou</Col>
        <Col className="borderedCol">Pessoas</Col>
        <AudioPlayerVocab
          text="People"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Retired</Col>
        <Col className="borderedCol">Ruitáirêd</Col>
        <Col className="borderedCol">Aposentado</Col>
        <AudioPlayerVocab
          text="Retired"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sister</Col>
        <Col className="borderedCol">Sístêr</Col>
        <Col className="borderedCol">Irmã</Col>
        <AudioPlayerVocab
          text="Sister"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row class Name="borderedRow1">
        <Col className="borderedCol">Sister-In-Law</Col>
        <Col className="borderedCol">Sístêr-în-Lóu</Col>
        <Col className="borderedCol">Cunhada</Col>
        <AudioPlayerVocab
          text="Sister-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Son</Col>
        <Col className="borderedCol">Sân</Col>
        <Col className="borderedCol">Filho</Col>
        <AudioPlayerVocab
          text="Son"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Son-In-Law</Col>
        <Col className="borderedCol">Sân-în-Lóu</Col>
        <Col className="borderedCol">Genro</Col>
        <AudioPlayerVocab
          text="Son-In-Law"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Uncle</Col>
        <Col className="borderedCol">Ânkou</Col>
        <Col className="borderedCol">Tio</Col>
        <AudioPlayerVocab
          text="Uncle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Wife</Col>
        <Col className="borderedCol">Wáif</Col>
        <Col className="borderedCol">Esposa</Col>
        <AudioPlayerVocab
          text="Wife"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Woman</Col>
        <Col className="borderedCol">Wôman</Col>
        <Col className="borderedCol">Mulher</Col>
        <AudioPlayerVocab
          text="Woman"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Women</Col>
        <Col className="borderedCol">Wîmên</Col>
        <Col className="borderedCol">Mulheres</Col>
        <AudioPlayerVocab
          text="Women"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Young</Col>
        <Col className="borderedCol">Iông</Col>
        <Col className="borderedCol">Jovem</Col>
        <AudioPlayerVocab
          text="Young"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>


    </Container>



<Footer />
</>
    );
}
