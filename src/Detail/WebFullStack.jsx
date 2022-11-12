import React from 'react'

const WebFullStack = () => {
  return (
    <div className='w-full h-[] bg-gradient-to-br from-black to-[#315e59] mt-[65px]'>
      <div className='w-[90%] h-auto  m-auto flex flex-col items-center justify-center'>
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full md2:justify-around '>
            <img className='w-[100px] ' src='https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png' />
            
              <div className='ml-[15px]'>
              <span className='text-[20px] text-[#237BA3] font-bold ml-[5px]'>Wordpress </span>
              <div className='w-full m-auto h-auto flex flex-row items-center justify-start mt-[5px]'>
             <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px] border border-[white]"></i>
             Wordpress is still widely used 
             </div>   
             <div className='w-full m-auto h-auto flex flex-row items-center justify-start mt-[5px]'>
             <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px] border border-[white]"></i>
             it is great for freelancing
             </div>   
             <div className='w-full m-auto h-auto flex flex-row items-center justify-start mt-[5px]'>
             <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px] border border-[white]"></i>
             Small business clients like it
             </div>   
             <div className='w-full m-auto h-auto flex flex-row items-center justify-start mt-[5px]'>
             <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px] border border-[white]"></i>
             it cam also be used as a headless CMS
             </div>   
              </div>
              
            </div>
             
        </div>         
        </div> 
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
         <span className='text-[25px] flex flex-row  items-center justify-center m-[10px] font-bold text-white text-center '>Hosting Platforms</span>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full md2:justify-around '>
             
            <img className='w-[120px]  ' src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH' />
            <img className='w-[130px] m-[10px] ' src='https://www.vectorlogo.zone/logos/heroku/heroku-ar21.png' />
            <img className='w-[130px] m-[10px] ' src='data:image/png;base64,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' />
            
              
              
            </div>
             
        </div>         
        </div> 
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
         <span className='text-[25px] flex flex-row  items-center justify-center m-[10px] font-bold  text-white text-center'>Server Software</span>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full md2:justify-around '>
             
            <img className='w-[150px]  ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Apache_HTTP_server_logo_%282019-present%29.svg/2560px-Apache_HTTP_server_logo_%282019-present%29.svg.png' />
            <img className='w-[160px] m-[10px] ' src='http://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png' />
           
            
              
              
            </div>
             
        </div>         
        </div> 
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
         <span className='text-[25px] flex flex-row  items-center justify-center m-[10px] font-bold  text-white text-center'>Containers & Virtualization</span>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full md2:justify-around '>
             
            <img className='w-[150px]  ' src='https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png' />
            <img className='w-[160px] m-[10px] ' src='https://www.serviops.ca/wp-content/uploads/2015/07/kubernetes-logo.png' />
           
            
              
              
            </div>
             
        </div>         
        </div> 
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
         <span className='text-[25px] flex flex-row  items-center justify-center m-[10px] font-bold  text-white text-center'>image & Video</span>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full md2:justify-around '>
             
            <img className='w-[100px]  ' src='https://miro.medium.com/max/500/1*pLhqRKXZAmpJP4wpEPfM4w.png' />
            <img className='w-[180px] m-[10px] ' src='https://fathomtech.io/blog/using-aws-s3-and-cloudfront-for-fast-static-web-sites/amazon-s3.png' />
           
            
              
              
            </div>
             
        </div>         
        </div> 
     <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
        <div className='w-full flex flex-col flex-nowrap '>
         <span className='text-[20px] flex flex-row  items-center justify-center m-[10px] font-bold  text-black text-center'>
            A backend web devloper should know how to do following ... 

         </span>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Comfortable with a server-side programming language 
         </div>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Know how to setup and manage a database & ORM/ODM
         </div>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Know how to create REST APIS and implement authentication 
         </div>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Comfortable  with the terminal and Unix commands
         </div>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Know how to deploy project and work with servers
         </div>
         <div className=' p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>A <span className='text-[#336EE5]'>full stack developer </span>
         Can do This as well as Fontend tasts
         </div> 
   
             
        </div>         
        </div> 
         <div className='m-[15px] '>Learing More..</div>
        </div>
    </div>
  )
}

export default WebFullStack