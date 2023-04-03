import { homeList } from '../../datas/homeList'
import '../../styles/Fiche_logement.css'
import {React, useEffect, useState } from "react"
import Collapse from '../../components/Collapse/Collapse';
import NoteEtoile from '../../components/Note/Note';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from "react-router-dom";



function Fiche() {

    //Recuperation données du logement
    const id = useParams();
    const ficheLogement = homeList.find(logement => logement.id === id.id);
    const equipmentList = ficheLogement.equipments.map((item, index) => (
                <li key={index} className="equipmentList">
                    {item}
                </li>
    )); ;
    const etoiles = ficheLogement.rating;
    console.log (ficheLogement);
    return (
      <div className='Fiche'>
            <section className='Carrousel-content'>
                <Carousel slides={ficheLogement.picture}/>
            </section>
            <section className='Infos-content'>
                <div className='Titre-lieu'>
                    <h1>{ficheLogement.title}</h1>
                    <h3>{ficheLogement.location}</h3>
                    <div className='TagsBox'>
                        {ficheLogement.tags.map((tag, index) => {
                            return (
                                <span className='Tags' key={index}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
                <div className='Proprio-note'>
                    <div className='Proprio_card'>
                        <h2>{ficheLogement.host.name}</h2>
                        <img src={ficheLogement.host.picture} alt="Photo_proprio" />
                    </div>
                    <div className='Notes'>
                        <NoteEtoile rating={ficheLogement.rating} />
                    </div>
                </div>
            </section>
            <section className='Collapse-content'>
                <div className='description'>
                        <Collapse titre="Description" texte={ficheLogement.description} />
                </div>
                <div className='description'>
                        <Collapse titre="Equipements" texte={equipmentList} />
                </div>
            </section>
        
      </div>
    );
}

export default Fiche;
