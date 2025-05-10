## React Slick Slider Installation

**Step 1:** Open the Gitbash terminal in vs code and type the command below:
```
npm install react-slick --save
```
**Step 2:** Then install the `slick-carousel` package by typing the command below:
```
npm install slick-carousel --save
```
**Step 3:** Import `slick.css` and `Slider` to the Component (.jsx file) where slick slider is implemented.

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

## Next Arrow - Prev Arrow Implementation
**Step 1:** Create Two Components such as `NextArrow.jsx` and `PrevArrow.jsx` file inside the `components` folder. Then copy the code below to corresponding files:
```
import React from 'react'

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`text-primary text-3xl ${className}`} onClick={onClick} >
            prev
        </div>
    )
}

export default PrevArrow
```
```
import React from 'react'

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`text-primary text-3xl ${className}`} onClick={onClick} >
            next
        </div>
    )
}

export default NextArrow
```
**Step 2:** Import those two components where slick slider is implemented. Also add two properties `nextArrow` and `prevArrow` in the slider `settings` object.
#### Example:
![image](https://github.com/user-attachments/assets/422bf899-9f22-477d-aa6d-204112f78de8)

**Step 3:** Add [React Icons](https://react-icons.github.io/react-icons/) instead of text. 
#### Example:
![image](https://github.com/user-attachments/assets/727734fb-32e4-4422-8990-f5267acadb78)

**Step 4:** Set the position of `NextArrow` and `PrevArrow` by adding the properties showing below: (`z-index` is used in `PrevArrow`)
![image](https://github.com/user-attachments/assets/b57d7eb5-6f7c-44cc-b4e8-0eb2e2e49d96)
![image](https://github.com/user-attachments/assets/ee6732ae-0715-48d9-8f5b-e41c499c0bea)


## Reference:

- Check out the [React Slick](https://react-slick.neostack.com/docs/get-started) to integrate `React Slick Slider` in the project.
- Check out the [Custom Arrows](https://react-slick.neostack.com/docs/example/custom-arrows) to integrate `Next Arrow` and `Prev Arrow` in the `React Slick Slider`.
