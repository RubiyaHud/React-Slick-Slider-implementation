## React Slick Slider Installation

**Step 1:** Open the Gitbash terminal in vs code and type the command below:
```
npm install react-slick --save
```
**Step 2:** Then install the slick-carousel package by typing the command below:
```
npm install slick-carousel --save
```
**Step 3:** Import slick.css and Slider to the Component (.jsx file) where slick slider is used.

#### Example:
![image](https://github.com/user-attachments/assets/29782c90-141a-4ea4-9a27-200525348a18)

**Step 4:** Copy the code below and paste it inside the component arrow function:
```
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
```
#### Example:
![image](https://github.com/user-attachments/assets/cd55b5a6-15a8-411f-84ae-bdc480c4036c)

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
