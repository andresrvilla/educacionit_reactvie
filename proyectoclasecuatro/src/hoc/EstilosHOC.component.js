import '../App.css';

export default function EstilosHOC(Componente){
    return <> 
    <div className="hoc">
        <Componente />
    </div>
    </>
}