exports.show = (req, res) => {
    // https://localhost:4000/ || https:/localhost:400/about || /contact
    const path = (req.path === '/') ? '/home' : req.path;

    //render the view 
    res.render(`pages${path}`); //views/pages/about
};