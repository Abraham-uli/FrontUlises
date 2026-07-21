import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';
import onboarding from './learning-journey.png';
import process from './process.png';
import notification from './notification-bell.png';
import familytree from './family-tree.png';
import deadline from './deadline.png';
import procedure from './procedure.png';
import { FormatColorText } from '@mui/icons-material';

function OnboardingCard({
    title, text, image, imageTitle, width = "27rem", bgColor = "#ffffff", textColor = "#2E4D5B", href = "#"}) {
    return (
        <a href={href} style={{ textDecoration: "none" }}>
            <Card
                style={{borderRadius: "0px",marginLeft:'-25%', width, textAlign: "center", color: textColor, backgroundColor: bgColor}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {image && (<Card.Img variant="top" src={image} title={imageTitle} width="95%" className="block"/>
                    )}
                </Card.Body>
            </Card>
        </a>
    );
}
function OnboardingCard2({
    title, text, image, imageTitle, width = "15rem", bgColor = "#ffffff", textColor = "#2E4D5B", href = "#"}) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        <Card
            style={{borderRadius: "22px", width, textAlign: "center", color: textColor, backgroundColor: bgColor}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                {image && (<Card.Img variant="top" src={image} title={imageTitle} width="15%" className="block"/>
                )}
            </Card.Body>
        </Card>
      </a>
    );
}
function CuerpoOnboarding() {
    return (
        <div>

            <div style={{padding: "6%", display: "grid", gridTemplateColumns: "repeat(3, 0fr)",gap: "0px"}}>
                <OnboardingCard title="Onboarding"text=""image={onboarding}imageTitle="Onboarding"/>

                <OnboardingCard title="Documentación"text=""image={process} object-fit scale-down imageTitle="Documentación" bgColor="#2E4D5B" textColor="#fff"/>

                <OnboardingCard title="Recordatorios" text="" image={notification} imageTitle="Recordatorios"/>
            </div>

            {/* Segunda sección */}
            <section style={{ padding: "2%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px"}}>
                <OnboardingCard2 title="Organigrama" image={familytree} imageTitle="Organigrama" bgColor="#2E4D5B" textColor="#fff"/>

                <OnboardingCard2 title="Exámenes Pendientes" image={deadline} imageTitle="Exámenes Pendientes" width="18rem"/>

                <OnboardingCard2 title="Nuevo Documento" image={procedure} imageTitle="Nuevo Documento" width="18rem" bgColor="#2E4D5B" textColor="#fff"/>
            </section>
        </div>
    );
}

export default CuerpoOnboarding;