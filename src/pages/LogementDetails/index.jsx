import { React } from "react";
import { useParams } from "react-router-dom";

export default function LogementDetails() {
    const params = useParams();
    console.log(params);
    
    return (
        <main className="corps-page">
            <h1>Détails du logement</h1>
        </main>
    )
}