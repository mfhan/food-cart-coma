# food-cart-coma
## Discover, Rate and Share Food Carts

### FOODIES: Do you spend your lunch time seeking out food cart fare? Are you frustrated that you can't readily find them on standard maps? Would you like to share your favorite cart locations with your foodie friends? Then join us in a FoodCartComa! 

### VENDORS: Would you like to gain more visibility? Would you like to be featured in select, privately-shared maps made and used by foodies? Sign up! 

## VISUALS:  

-- ERD: https://i.imgur.com/BvHWdxc.png  

-- wireframes:  
[Home Page](https://i.imgur.com/FJc8e5y.png)  
[Log-In Page](https://i.imgur.com/PRQ0omA.png)  
[Entry Submission](https://i.imgur.com/GifHd3k.png)  


### User Journey MVP:  
1. Manipulate the map and identify food truck location  
2. Drop a pin 
3. Window opens and asks to confirm whether this will be a new entry --> Yes  
4. User taken to entry submission page  
5. User writes description/review  
6. User submits review
7. User can verify new entry on home page map

### User Journey post-MVP:  
1. User must REGISTER  
2. User must LOG IN  
3. User can ADD new food items ("specials") to existing vendor object  



## TECH: 

React  
Node  
Express  
Sequelize  
Postgres  
Axios  
bcrypt  
mapbox + Uber's mapbox-GL  

post-MVP:  
FriendList  
venmo payment?   



## CONTROLLERS:  
vendorController  
specialsController   
userController  


----
## REACT COMPONENTS:  
Hierarchy: (link)  

### MVP:  
Map  
VendorList  
NewVendorForm  
UpdateVendorForm  
SingleVendor  

### Post-MVP:
UserRegister  
UserLogin  


### TIMELINE: 
Day 1: populating map with existing artists  
Day 2: CREATING new artists via map input  
Day 3: front-end  
Day 4: auth + front-end





| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Configuring API | High | 3hrs| N/A | N/A |
| Creating Component Structure/Routes | High | 3hrs| N/A | N/A |
| Populating database | High | 3hrs| N/A | N/A |
| Connecting DB with front-end | High | 3hrs| N/A | N/A |
| Populating map at window open | High | 3hrs| N/A | N/A |
| Handling new entry creation via map | High | 6hrs| N/A | N/A |
| Styling | High | 4hrs| N/A | N/A |
| Total | H | 6hrs| 5hrs | 5hrs |


