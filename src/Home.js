const Home = () => {

  const handleClick = (e) => {
    console.log("hello ", e);
  }

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  }
  const handleClickWithEvent = (name, e) => {
    console.log("hello " + name, e);
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClickAgain("mario")}>Click Again</button>
      <button onClick={(e) => handleClickWithEvent("mario", e)}>Click Thrice</button>
    </div>
   );
}
 
export default Home;