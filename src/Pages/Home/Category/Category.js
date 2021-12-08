import React, {  useState  } from 'react';
import useMeals from '../../../hooks/useMeals';
import '../FoodCase/FoodCase.css'
import FoodCategory from '../FoodCase/FoodCategory';
const Category = () => {
const [menuTab, setMenuTab] = useState('b')
const [food] = useMeals()




    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }


    return (
      <section className="container" style={{marginTop:'-60px'}}>
     
      <div className="d-flex align-items-center justify-content-center  ">
          <p className={menuTab === 'b' ? "active_menu_tab poppins  me-2" : "menu_tab poppins me-2"} onClick={() => handleMenuTabs('b')}>Breakfast</p>
          <p className={menuTab === 'lunch' ? "active_menu_tab poppins  me-2" : "menu_tab poppins me-2"} onClick={() => handleMenuTabs('lunch')}>Lunch</p>
          <p className={menuTab === 'd' ? "active_menu_tab poppins  me-2" : "menu_tab poppins me-2"} onClick={() => handleMenuTabs('d')}>Dinner</p>
      </div>


      <div className="mapGrid">
          {food.filter((item) => menuTab === item.c).map(item => <FoodCategory key={item.id} {...item} />
          )}
      </div>
  </section>
    );
};

export default Category;