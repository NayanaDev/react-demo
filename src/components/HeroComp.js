function HeroComp({heronm}) {
    if(heronm === "Joker")
    {
        throw new Error("not a hero")
    }
    return (  
        <div>{heronm}</div>
    );
}

export default HeroComp