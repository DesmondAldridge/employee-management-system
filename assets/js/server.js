const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ems_db'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    setTimeout(function(){
        console.log(`
                                                                                                                                                                                                                
                                                                                                                                 dddddddd ''''''                                                                
DDDDDDDDDDDDD                                                                                                                    d::::::d '::::'                                                                
D::::::::::::DDD                                                                                                                 d::::::d '::::'                                                                
D:::::::::::::::DD                                                                                                               d::::::d ':::''                                                                
DDD:::::DDDDD:::::D                                                                                                              d:::::d ':::'                                                                  
  D:::::D    D:::::D     eeeeeeeeeeee        ssssssssss      mmmmmmm    mmmmmmm      ooooooooooo   nnnn  nnnnnnnn        ddddddddd:::::d ''''       ssssssssss                                                  
  D:::::D     D:::::D  ee::::::::::::ee    ss::::::::::s   mm:::::::m  m:::::::mm  oo:::::::::::oo n:::nn::::::::nn    dd::::::::::::::d          ss::::::::::s                                                 
  D:::::D     D:::::D e::::::eeeee:::::eess:::::::::::::s m::::::::::mm::::::::::mo:::::::::::::::on::::::::::::::nn  d::::::::::::::::d        ss:::::::::::::s                                                
  D:::::D     D:::::De::::::e     e:::::es::::::ssss:::::sm::::::::::::::::::::::mo:::::ooooo:::::onn:::::::::::::::nd:::::::ddddd:::::d        s::::::ssss:::::s                                               
  D:::::D     D:::::De:::::::eeeee::::::e s:::::s  ssssss m:::::mmm::::::mmm:::::mo::::o     o::::o  n:::::nnnn:::::nd::::::d    d:::::d         s:::::s  ssssss                                                
  D:::::D     D:::::De:::::::::::::::::e    s::::::s      m::::m   m::::m   m::::mo::::o     o::::o  n::::n    n::::nd:::::d     d:::::d           s::::::s                                                     
  D:::::D     D:::::De::::::eeeeeeeeeee        s::::::s   m::::m   m::::m   m::::mo::::o     o::::o  n::::n    n::::nd:::::d     d:::::d              s::::::s                                                  
  D:::::D    D:::::D e:::::::e           ssssss   s:::::s m::::m   m::::m   m::::mo::::o     o::::o  n::::n    n::::nd:::::d     d:::::d        ssssss   s:::::s                                                
DDD:::::DDDDD:::::D  e::::::::e          s:::::ssss::::::sm::::m   m::::m   m::::mo:::::ooooo:::::o  n::::n    n::::nd::::::ddddd::::::dd       s:::::ssss::::::s                                               
D:::::::::::::::DD    e::::::::eeeeeeee  s::::::::::::::s m::::m   m::::m   m::::mo:::::::::::::::o  n::::n    n::::n d:::::::::::::::::d       s::::::::::::::s                                                
D::::::::::::DDD       ee:::::::::::::e   s:::::::::::ss  m::::m   m::::m   m::::m oo:::::::::::oo   n::::n    n::::n  d:::::::::ddd::::d        s:::::::::::ss                                                 
DDDDDDDDDDDDD            eeeeeeeeeeeeee    sssssssssss    mmmmmm   mmmmmm   mmmmmm   ooooooooooo     nnnnnn    nnnnnn   ddddddddd   ddddd         sssssssssss                                                   
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
EEEEEEEEEEEEEEEEEEEEEE                                            lllllll                                                                                                                                       
E::::::::::::::::::::E                                            l:::::l                                                                                                                                       
E::::::::::::::::::::E                                            l:::::l                                                                                                                                       
EE::::::EEEEEEEEE::::E                                            l:::::l                                                                                                                                       
  E:::::E       EEEEEE   mmmmmmm    mmmmmmm   ppppp   ppppppppp    l::::l    ooooooooooo yyyyyyy           yyyyyyy eeeeeeeeeeee        eeeeeeeeeeee                                                             
  E:::::E              mm:::::::m  m:::::::mm p::::ppp:::::::::p   l::::l  oo:::::::::::ooy:::::y         y:::::yee::::::::::::ee    ee::::::::::::ee                                                           
  E::::::EEEEEEEEEE   m::::::::::mm::::::::::mp:::::::::::::::::p  l::::l o:::::::::::::::oy:::::y       y:::::ye::::::eeeee:::::ee e::::::eeeee:::::ee                                                         
  E:::::::::::::::E   m::::::::::::::::::::::mpp::::::ppppp::::::p l::::l o:::::ooooo:::::o y:::::y     y:::::ye::::::e     e:::::ee::::::e     e:::::e                                                         
  E:::::::::::::::E   m:::::mmm::::::mmm:::::m p:::::p     p:::::p l::::l o::::o     o::::o  y:::::y   y:::::y e:::::::eeeee::::::ee:::::::eeeee::::::e                                                         
  E::::::EEEEEEEEEE   m::::m   m::::m   m::::m p:::::p     p:::::p l::::l o::::o     o::::o   y:::::y y:::::y  e:::::::::::::::::e e:::::::::::::::::e                                                          
  E:::::E             m::::m   m::::m   m::::m p:::::p     p:::::p l::::l o::::o     o::::o    y:::::y:::::y   e::::::eeeeeeeeeee  e::::::eeeeeeeeeee                                                           
  E:::::E       EEEEEEm::::m   m::::m   m::::m p:::::p    p::::::p l::::l o::::o     o::::o     y:::::::::y    e:::::::e           e:::::::e                                                                    
EE::::::EEEEEEEE:::::Em::::m   m::::m   m::::m p:::::ppppp:::::::pl::::::lo:::::ooooo:::::o      y:::::::y     e::::::::e          e::::::::e                                                                   
E::::::::::::::::::::Em::::m   m::::m   m::::m p::::::::::::::::p l::::::lo:::::::::::::::o       y:::::y       e::::::::eeeeeeee   e::::::::eeeeeeee                                                           
E::::::::::::::::::::Em::::m   m::::m   m::::m p::::::::::::::pp  l::::::l oo:::::::::::oo       y:::::y         ee:::::::::::::e    ee:::::::::::::e                                                           
EEEEEEEEEEEEEEEEEEEEEEmmmmmm   mmmmmm   mmmmmm p::::::pppppppp    llllllll   ooooooooooo        y:::::y            eeeeeeeeeeeeee      eeeeeeeeeeeeee                                                           
                                               p:::::p                                         y:::::y                                                                                                          
                                               p:::::p                                        y:::::y                                                                                                           
                                              p:::::::p                                      y:::::y                                                                                                            
                                              p:::::::p                                     y:::::y                                                                                                             
                                              p:::::::p                                    yyyyyyy                                                                                                              
                                              ppppppppp                                                                                                                                                         
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
MMMMMMMM               MMMMMMMM                                                                                                                                                                   tttt          
M:::::::M             M:::::::M                                                                                                                                                                ttt:::t          
M::::::::M           M::::::::M                                                                                                                                                                t:::::t          
M:::::::::M         M:::::::::M                                                                                                                                                                t:::::t          
M::::::::::M       M::::::::::M  aaaaaaaaaaaaa  nnnn  nnnnnnnn      aaaaaaaaaaaaa     ggggggggg   ggggg    eeeeeeeeeeee       mmmmmmm    mmmmmmm       eeeeeeeeeeee    nnnn  nnnnnnnn    ttttttt:::::ttttttt    
M:::::::::::M     M:::::::::::M  a::::::::::::a n:::nn::::::::nn    a::::::::::::a   g:::::::::ggg::::g  ee::::::::::::ee   mm:::::::m  m:::::::mm   ee::::::::::::ee  n:::nn::::::::nn  t:::::::::::::::::t    
M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::an::::::::::::::nn   aaaaaaaaa:::::a g:::::::::::::::::g e::::::eeeee:::::eem::::::::::mm::::::::::m e::::::eeeee:::::een::::::::::::::nn t:::::::::::::::::t    
M::::::M M::::M M::::M M::::::M           a::::ann:::::::::::::::n           a::::ag::::::ggggg::::::gge::::::e     e:::::em::::::::::::::::::::::me::::::e     e:::::enn:::::::::::::::ntttttt:::::::tttttt    
M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::a  n:::::nnnn:::::n    aaaaaaa:::::ag:::::g     g:::::g e:::::::eeeee::::::em:::::mmm::::::mmm:::::me:::::::eeeee::::::e  n:::::nnnn:::::n      t:::::t          
M::::::M   M:::::::M   M::::::M  aa::::::::::::a  n::::n    n::::n  aa::::::::::::ag:::::g     g:::::g e:::::::::::::::::e m::::m   m::::m   m::::me:::::::::::::::::e   n::::n    n::::n      t:::::t          
M::::::M    M:::::M    M::::::M a::::aaaa::::::a  n::::n    n::::n a::::aaaa::::::ag:::::g     g:::::g e::::::eeeeeeeeeee  m::::m   m::::m   m::::me::::::eeeeeeeeeee    n::::n    n::::n      t:::::t          
M::::::M     MMMMM     M::::::Ma::::a    a:::::a  n::::n    n::::na::::a    a:::::ag::::::g    g:::::g e:::::::e           m::::m   m::::m   m::::me:::::::e             n::::n    n::::n      t:::::t    tttttt
M::::::M               M::::::Ma::::a    a:::::a  n::::n    n::::na::::a    a:::::ag:::::::ggggg:::::g e::::::::e          m::::m   m::::m   m::::me::::::::e            n::::n    n::::n      t::::::tttt:::::t
M::::::M               M::::::Ma:::::aaaa::::::a  n::::n    n::::na:::::aaaa::::::a g::::::::::::::::g  e::::::::eeeeeeee  m::::m   m::::m   m::::m e::::::::eeeeeeee    n::::n    n::::n      tt::::::::::::::t
M::::::M               M::::::M a::::::::::aa:::a n::::n    n::::n a::::::::::aa:::a gg::::::::::::::g   ee:::::::::::::e  m::::m   m::::m   m::::m  ee:::::::::::::e    n::::n    n::::n        tt:::::::::::tt
MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa nnnnnn    nnnnnn  aaaaaaaaaa  aaaa   gggggggg::::::g     eeeeeeeeeeeeee  mmmmmm   mmmmmm   mmmmmm    eeeeeeeeeeeeee    nnnnnn    nnnnnn          ttttttttttt  
                                                                                               g:::::g                                                                                                          
                                                                                   gggggg      g:::::g                                                                                                          
                                                                                   g:::::gg   gg:::::g                                                                                                          
                                                                                    g::::::ggg:::::::g                                                                                                          
                                                                                     gg:::::::::::::g                                                                                                           
                                                                                       ggg::::::ggg                                                                                                             
                                                                                          gggggg                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
   SSSSSSSSSSSSSSS                                            tttt                                                                                                                                              
 SS:::::::::::::::S                                        ttt:::t                                                                                                                                              
S:::::SSSSSS::::::S                                        t:::::t                                                                                                                                              
S:::::S     SSSSSSS                                        t:::::t                                                                                                                                              
S:::::S      yyyyyyy           yyyyyyy  ssssssssss   ttttttt:::::ttttttt        eeeeeeeeeeee       mmmmmmm    mmmmmmm                                                                                           
S:::::S       y:::::y         y:::::y ss::::::::::s  t:::::::::::::::::t      ee::::::::::::ee   mm:::::::m  m:::::::mm                                                                                         
 S::::SSSS     y:::::y       y:::::yss:::::::::::::s t:::::::::::::::::t     e::::::eeeee:::::eem::::::::::mm::::::::::m                                                                                        
  SS::::::SSSSS y:::::y     y:::::y s::::::ssss:::::stttttt:::::::tttttt    e::::::e     e:::::em::::::::::::::::::::::m                                                                                        
    SSS::::::::SSy:::::y   y:::::y   s:::::s  ssssss       t:::::t          e:::::::eeeee::::::em:::::mmm::::::mmm:::::m                                                                                        
       SSSSSS::::Sy:::::y y:::::y      s::::::s            t:::::t          e:::::::::::::::::e m::::m   m::::m   m::::m                                                                                        
            S:::::Sy:::::y:::::y          s::::::s         t:::::t          e::::::eeeeeeeeeee  m::::m   m::::m   m::::m                                                                                        
            S:::::S y:::::::::y     ssssss   s:::::s       t:::::t    tttttte:::::::e           m::::m   m::::m   m::::m                                                                                        
SSSSSSS     S:::::S  y:::::::y      s:::::ssss::::::s      t::::::tttt:::::te::::::::e          m::::m   m::::m   m::::m                                                                                        
S::::::SSSSSS:::::S   y:::::y       s::::::::::::::s       tt::::::::::::::t e::::::::eeeeeeee  m::::m   m::::m   m::::m                                                                                        
S:::::::::::::::SS   y:::::y         s:::::::::::ss          tt:::::::::::tt  ee:::::::::::::e  m::::m   m::::m   m::::m                                                                                        
 SSSSSSSSSSSSSSS    y:::::y           sssssssssss              ttttttttttt      eeeeeeeeeeeeee  mmmmmm   mmmmmm   mmmmmm                                                                                        
                   y:::::y                                                                                                                                                                                      
                  y:::::y                                                                                                                                                                                       
                 y:::::y                                                                                                                                                                                        
                y:::::y                                                                                                                                                                                         
               yyyyyyy                                                                                                                                                                                          
                                                                                                                                                                                                                
                                                                                                                                                                                                                
`)},3000);
    
});

module.exports = {server};