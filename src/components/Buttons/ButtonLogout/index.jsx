import "./style.css" 

export default function ButtonLogout({text, onClick}){
    return (
      <>
        <button onClick={onClick} className="logout-button">
          {text}
        </button>
      </>
    );
}