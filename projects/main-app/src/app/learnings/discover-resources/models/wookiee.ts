export interface Wookiee {
    name: string;
    homeworld: string;
    imageUrl: string;
    description: string;
}

export const wookiees = 
 [
    { name: 'Chewbacca', homeworld: 'Kashyyyk', imageUrl: 'assets/images/chewbacca.jpg', description: 'Chewbacca is a Wookiee warrior, mechanic, and co-pilot of the Millennium Falcon. He is known for his loyalty and bravery.' },
    { name: 'Tarfful', homeworld: 'Kashyyyk', imageUrl: 'assets/images/tarfful.jpg', description: 'Tarfful is a Wookiee chieftain and warrior who played a significant role in the Clone Wars, leading his people in battle against the Separatists.' },
    { name: 'Lumpawaroo', homeworld: 'Kashyyyk', imageUrl: 'assets/images/lumpawaroo.jpg', description: 'Lumpawaroo, also known as Lowbacca, is Chewbacca\'s nephew. He is a skilled pilot and fighter, following in his uncle\'s footsteps.' }
 ]