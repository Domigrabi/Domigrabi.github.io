import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie zasobów

loadSprite("tlo","bombka.png")
loadSprite("dodatek","zjazd.png")
loadSound("muzyka","Anioł Pasterzom Mówił.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add ([
    sprite("tlo"),
    pos(0,0)
])

const dodatek = add ([
    sprite("dodatek"),
    pos(90,30)
])


onUpdate(()=>{

    if(dodatek.pos.x<180) dodatek.pos.x = dodatek.pos.x + 1

    else if(dodatek.pos.y<240 ) 
    
    {
        dodatek.pos.y = dodatek.pos.y + 1
    }

    else if(dodatek.pos.y==240 && dodatek.pos.x<420) 
    
    {
        dodatek.pos.x = dodatek.pos.x + 1

    }
    
})

add([
    play("muzyka")
])


