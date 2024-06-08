ClassyLuxury is a hotel Booking application. where user need to Create & Login to his Account. this Application helps user to get the details of the hotels in the city. here user can Book a room, Add reviews to the selected Hotel & can able to see the reviews of the hotel.
Here we used Get,Post,Patch API. And added Authentication for the Application

## Note

In this Project JSON will be the server.
Run the JSON server and npm start in seperate terminals

### `JSON server`

```jsx
 npx json-server --watch db.json
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm start`

```jsx
 npm start
```

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Screenshots of Final Output

- SignUp Page
  ![SignupPage](screenshots/1.Signup.png)

- Login Page
  ![LoginPage](screenshots/2.Login.png)

- HomePage
  ![HomePage](screenshots/3.HomePage.png)

- Hotels Page
  ![HotelsPage](screenshots/4.Hotels.png)

- Bookroom Page
  ![BookroomPage](screenshots/5.Bookroom.png)

- View Bookings Page
  ![viewBookingsPage](screenshots/6.viewBookings.png)

- viewReviews Page
  ![viewReviewsPage](screenshots/7.viewReviews.png)

- Profile Page
  ![ProfilePage](screenshots/8.profilePage.png)

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```
