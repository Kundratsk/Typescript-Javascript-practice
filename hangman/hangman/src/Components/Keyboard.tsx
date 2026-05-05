import styles from ".//Keyboard.module.css"

const KEYS = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","š","z","ž","t","u","v","w","õ","ä","ö","ü","x","y"
]

export function Keyboard() {
    return ( 
    <div 
        style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        }}
    >
        {KEYS.map(key => {            
        return <button 
        className={`${styles.btn}`}
         key={key}
         >
            {key}
         </button>
        })}
        </div>
    )
}