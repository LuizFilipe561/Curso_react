import Button from './evento/Button.jsx/'

function Evento() {
    function meuEvento() {
        alert('Oh, Event appeared!')
    }

    return (
        <div>
            <p>Click on event</p>
            <Button event={meuEvento} text="First event" />    
        </div>
    )
}

export default Evento