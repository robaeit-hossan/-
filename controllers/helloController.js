export const sayHello = (req, res) => {
    res.send('Hello World');
  };

export const postRouter = (req, res)=>{
  res.send('I am post body');
}