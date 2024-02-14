import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import { getCategoriesAndDocuments } from "../firebase"; // Import your function to fetch data
import { setCategoriesAndDocuments } from "../features/movie/movieSlice";



const Home = (props) => {
 const dispatch = useDispatch();
 const { recommend, newDisney, original, trending } = useSelector(
   (state) => state.movie
 );

 useEffect(() => {
   const fetchData = async () => {
     try {
       const categoryMap = await getCategoriesAndDocuments();
       // Dispatch the action to update the Redux store with fetched data
       dispatch(setCategoriesAndDocuments(categoryMap));
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
 }, [dispatch]);

  /*   useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]); */

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
