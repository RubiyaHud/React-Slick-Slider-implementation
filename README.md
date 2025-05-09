## React Slick Slider Installation

**Step 1:** Open the Gitbash terminal in vs code and type the command below:
```
npm install react-slick --save
```
**Step 2:** Then install the `slick-carousel` package by typing the command below:
```
npm install slick-carousel --save
```
**Step 3:** Import `slick.css` and `Slider` to the Component (.jsx file) where slick slider is used.

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

**Step 5:** Copy the code (`Slider Component`) below and paste it inside the `return` of component arrow function :
```
<Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
</Slider>
```
**Step 6:** Edit the code (`Slider Component`) according to the requirements of the project.
#### Example:
![image](https://github.com/user-attachments/assets/73fe29b9-c53a-45fd-a43f-3a3fda178487)



## Reference:

- Check out the [React Slick](https://react-slick.neostack.com/docs/get-started) to integrate `React Slick Slider` in the project.
- Check out the [Custom Arrows](https://react-slick.neostack.com/docs/example/custom-arrows) to integrate `Next Arrow` and `Prev Arrow` in the `React Slick Slider`.
