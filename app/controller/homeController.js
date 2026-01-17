
class HomeController{

  async index(req,res){
    try{
      res.render('home', {
        title: 'Home Page'
      })
    } catch(err){
      console.log(err)
    }
  }

  async about(req,res){
    try{
      res.render('about', {
        title: 'About Page'
      })
    } catch(err){
      console.log(err)
    }
  }

  async details(req,res){
    try{
      res.render('details', {
        title: 'Details Page'
      })
    } catch(err){
      console.log(err)
    }
  }
}


module.exports=new HomeController