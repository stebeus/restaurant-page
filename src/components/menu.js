import imgMushroomPizza from "/src/assets/david-foodphototasty.jpg";
import imgSpaghetti from "/src/assets/diego-ramirez.jpg";

const menu = /* html */ `
  <h2>Menu</h2>
  <h3>Mushroom Pizza</h3>
  <p>
    Our Mushroom Pizza features a light, golden crust topped with classic tomato
    sauce, melted mozzarella, and freshly sliced mushrooms. Simple and aromatic,
    it highlights the earthy flavor of mushrooms in every bite.
  </p>
  <img
    src=${imgMushroomPizza}
    alt="Brown mushroom pizza"
    width="640"
    height="640"
  />
  <h3>Spaghetti</h3>
  <p>
    The Spaghetti is served with slow-simmered tomato sauce, tender meatballs,
    and a generous topping of grated cheese. Finished with fresh basil, it
    delivers a rich, comforting taste rooted in Italian tradition.
  </p>
  <img
    src=${imgSpaghetti}
    alt="Italian spaghetti with meatballs and granulated cheese on top"
    width="640"
    height="640"
  />
`;

export { menu };
