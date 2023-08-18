import { styled } from "styled-components";
import { finalData } from "../HotelsPage/Menu";

const ViewReview = () => {
  const finalResult = finalData.reviews || [];
  if (finalResult == "") {
    return <h2 className="noRoom">Some Issues Please come back again...</h2>;
  }

  return (
    <Wrapper>
      <section className="Main">
        <div className="secondMain">
          <span>Customer's Reviews</span>
          <div className="box">
            <div className="reviews">{finalResult[0]}</div>
            <div className="reviews">{finalResult[1]}</div>
            <div className="reviews">{finalResult[2]}</div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secondMain {
    width: 60%;
    height: 200px;
    background-color: #2b7a78;
    margin: 225px 0px 0px 14px;
    border-radius: 20px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #feffff;
    font-family: cursive;
    font-size: x-large;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  .reviews {
    width: 90%;
    height: 40px;
    background-color: #def2f1;
    border-radius: 8px;
    margin-top: 6px;
    text-align: center;
  }

  @media (max-width: 554px) {
    .secondMain {
      width: 80%;
      height: 200px;
      background-color: #2b7a78;
      margin: 225px 0px 0px 14px;
      border-radius: 20px;
    }
  }
`;

export default ViewReview;
