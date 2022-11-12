import React from 'react'
import Css from  '../img/Css.png'
import JS from  '../img/Js.png'
import Vue from  '../img/Vue.png'
import Angular from  '../img/Angular.png'
import jekyll from  '../img/jekyll.png'
const WebFontend = () => {
  return (
    <div className='bg-gradient-to-br from-black to-[#315e59] w-full h-[auto] mt-[65px]  ' >
       <div className='w-[90%] h-auto  m-auto flex flex-col items-center justify-center'>
        <div className='flex flex-row items-center justify-center my-[10px]'>
          <i className="fa-solid fa-person-running text-[50px] animate-pulse text-white"></i>
          <span className='ml-[5px] text-teal-400'>Start Here</span>
          <i className="fa-solid fa-arrow-down text-[20px] ml-[5px] text-teal-500"></i>
        </div>
        <div className='text-[19px] text-indigo-400 '>Building Blocks</div>
          <div className=' max-w-[1000px]  lg:w-[1000px] h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center p-[20px] rounded animate-slideup md2:flex-col  '>
              <div className='w-[auto] h-auto flex flex-col md2:flex-row'>
                  <img className=' m-[20px] w-[80px] h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' />
                  <img className='m-[20px] w-[80px] h-auto' src={Css}/>
              </div>
             
              <div className='flex flex-col animate-slidedown '>
                <div className='text-[25px]' >
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> HTML & CSS are the building  blocks of Web development 
                </div>
                <div className='text-[20px]' >
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> HTML5 Basic & Semantic Tags (Page Layout) 
                </div>
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> CSS Fundamentals
                </div>  
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> CSS Alignment (Flexbox & CSS Grid)
                </div>  
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Media Queries / Responsive Desing
                </div>  
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Simple Animations / Transitions
                </div>  
              </div>
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[19px] text-teal-400'>Extar Tool</div>
          <div className='max-w-[1000px]  lg:w-[1000px] h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center p-[20px] rounded animate-slideup md2:flex-col '>
             <div className='w-[100px] h-auto flex flex-col '>
                  <img className=' m-[20px] w-[80px] h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' />
                
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] animate-slidedown'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Sass is a CSS pre-processor that adds to the functionality of CSS. it offers variables, nesting, mixins , functions , etc.
                </div>  
          </div>
          <div className='max-w-[1000px]  lg:w-[1000px] h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col  '>
             <div className='w-[100px] h-auto flex flex-col '>
                 
                 <img className=' m-[20px] w-[80px] h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/1200px-PostCSS_Logo.svg.png' /> 
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] animate-slidedown'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> PostCSS is a tool for transforming CSS with JavaScript. There are plugins to add the Stuff Sass offers and more. 
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[19px] text-cyan-400'  >CSS Frameworks ( Choose One )</div>
          <div className='max-w-[1000px]  lg:w-[1000px] h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col   '>

              <div className='w-[90%] h-auto  text-[20px] ml-[20px] animate-slidedown'>
              <span className='text-[20px] text-cyan-400 font-bold'>CSS </span> Frameworks give you predefined classes/components to style elements. The can rapidly speed up  the process of creating layouts.   
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px] h-[auto] bg-slate-600 flex flex-row items-center   p-[10px] rounded mt-[15px] animate-slideup md2:flex-col  '>
             
             <div className='w-[100px] h-auto flex flex-col '>
                 
                 <img className=' m-[20px] w-[80px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col animate-slidedown '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-violet-500 mr-[20px] ml-[5px] '>Bootstarp 5</span>
                </div>
                  Popular, high leven framework
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] rounded mt-[15px] animate-slideup md2:flex-col   '>
             <div className='w-[100px] h-auto flex flex-col '>
                 
                 <img className=' m-[20px] w-[80px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col animate-slidedown '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-cyan-400 mr-[20px] ml-[5px]'>Tailwind CSS</span>
                </div>
                  Low-leven, Popular utility based framework
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col   '>
             <div className='w-[60px] h-auto flex flex-col mx-[20px] '>
                 
                 <img className=' mx-[20px] w-[80px] h-auto ' src='https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col animate-slidedown '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-teal-400 mr-[20px] ml-[5px]'>Bulma</span>
                </div>
                  Mobile first, modular framework
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col  '>
             <div className='w-[60px] h-auto flex flex-col mx-[20px] '>
                 
                 <img className=' mx-[20px] w-[80px] h-auto ' src='https://seeklogo.com/images/F/foundation-logo-AA9B725281-seeklogo.com.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col animate-slidedown '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-[white] mr-[20px] ml-[5px]'>Foundation</span>
                </div>
                  Advanced CSS framework
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[20px] font-bold text-[gold] animate-slidedown'>JavaScript</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col  '>
          <div className='w-[100px] h-auto flex flex-col '>
                  <img className=' m-[20px] w-[80px] h-auto' src={JS} />
                
              </div>
            <div className='w-[90%] h-auto  text-[20px] ml-[20px] animate-slidedown'>
            <span className='text-[20px] font-bold text-[gold] '>JavaScript</span> is the language of The browser. Every web developer should have some leven of JS knowledge.
              </div>  
            </div>

            <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col  '>
              
              <div className='flex flex-col animate-slidedown '>
                <div className='text-[20px]' >
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> JS Basic  
                </div>
                <div className='text-[20px]' >
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> DOM 
                </div>
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Async JS 
                </div>  
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Fetch API & HTTP
                </div>  
                <div className='text-[20px]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400"></i> Array Methods
                </div>  
         
              </div>
              <div className='flex flex-col animate-slidedown '>
                <div className='text-[20px] text-white' >
                <i class="fa-solid fa-arrow-right mx-[10px] text-[gold]"></i> Data Types, data structers, Function loops   
                </div>
                <div className='text-[20px] text-white' >
                <i class="fa-solid fa-arrow-right mx-[10px] text-[gold]"></i> Document object model
                </div>
                <div className='text-[20px] text-white'>
                <i class="fa-solid fa-arrow-right mx-[10px] text-[gold]"></i> Promises, Async/Await 
                </div>  
                <div className='text-[20px] text-white'>
                <i class="fa-solid fa-arrow-right mx-[10px] text-[gold]"></i> Make requests to API's & understand HTTP 
                </div>  
                <div className='text-[20px] text-white'>
                <i class="fa-solid fa-arrow-right mx-[10px] text-[gold]"></i> map, filter, reduce, etc... 
                </div>  
         
              </div>
          </div>

          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] animate-slideup md2:flex-col '>
             <div className='w-[60px] h-auto flex flex-col mx-[20px]  '>
                 
                 <img className=' mx-[20px] w-[80px] h-auto ' src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-row animate-slidedown '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-[#F05033] mr-[5px] ml-[5px]'>GIT</span>
                  is a popular version control system. it is used with remot  repositories such as GITHub, GitLab and BitBuket.
                </div>
                    
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className=' text-[20px] text-rose-500'>Deploying Frontend Projects</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-around p-[20px] rounded mt-[20px] '>
          <div className='flex flex-row items-center bg-[#00000020] rounded mb-[15px] flex-wrap'>          
              <div className='w-[auto] h-auto flex flex-col'>
              <div className='text-[18px] text- flex flex-row items-center justify-center font-bold '>Popular PlatForms</div>
                  <img className=' m-[20px] w-[150px] h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/2560px-Netlify_logo.svg.png' />
                  <img className='m-[20px] w-[150px] h-auto' src='data:image/png;base64,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'/>
              </div>
              <div className='w-[auto] h-auto flex flex-col  '>
                  <img className=' m-[20px] w-[120px] h-auto' src='https://www.datocms-assets.com/35255/1665957463-sponsor-logo-vercel.png' />
                  <img className='m-[20px] w-[130px] h-auto' src='https://p.kindpng.com/picc/s/301-3012484_amazon-s3-logo-hd-png-download.png'/>
              </div>
           </div>
           <div className='flex flex-row items-center bg-[#00000020] rounded flex-wrap'>
            
           <div className='w-[auto] h-auto flex flex-col'>
           <div className='text-[18px] text- flex flex-row items-center justify-center font-bold ml-[5px] '>Domain Name Registrars</div>
                  <img className=' m-[20px] w-[150px] h-auto' src='https://1000marken.net/wp-content/uploads/2022/08/NameCheap-Logo.png' />
                  <img className='m-[20px] w-[150px] h-auto' src='https://1000logos.net/wp-content/uploads/2022/05/Bluehost-Logo.png'/>
              </div>
              <div className='w-[auto] h-auto flex flex-col mt-[50px]'>
                  <img className=' m-[20px] w-[150px] h-auto' src='https://www.freelogovectors.net/wp-content/uploads/2018/05/domain-com-logo.png' />
                  <img className='m-[20px] w-[130px] h-auto' src='https://purepng.com/public/uploads/large/purepng.com-godaddy-logogodaddy-logofonttypeface2018new-21529675406om0g4.png'/>
              </div>
           </div>
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[20px] text-lime-400'>Fontend Frameworks ( Choose One )</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row  items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-[#61DBFB] mr-[20px] ml-[5px]'>React</span>
                 
                </div>
                <div className='text-[17px] text-[#61DBFB]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Create & Maintained By Facebook
                </div>
                <div className='text-[17px] text-[#61DBFB]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Most Popular Framework / Library 
                </div>
                <div className='text-[17px] text-[#61DBFB]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Morderate Learing Curve
                </div>
                <div className='text-[17px] text-[#61DBFB]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                React Router,JSX,Hooks,
                ContextAPI,Redux
                </div>
               
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src={Vue} /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-[#41B883] mr-[20px] ml-[5px]'>Vue</span>
                 
                </div>
                <div className='text-[17px] text-[#41B883]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Second Most Popular Framework
                </div>
                <div className='text-[17px] text-[#41B883]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Great Community
                </div>
                <div className='text-[17px] text-[#41B883]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Low Learing Curve
                </div>
                <div className='text-[17px] text-[#41B883]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Vue CLI,Vue Router, Composition API, Vuex  
                </div>
               
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src={Angular} /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-rose-500 mr-[20px] ml-[5px]'>Angular</span>
                 
                </div>
                <div className='text-[17px] text-rose-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Create & Maintained By Google
                </div>
                <div className='text-[17px] text-rose-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Popular in Enterprise
                </div>
                <div className='text-[17px] text-rose-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Steep Learing Curve
                </div>
                <div className='text-[17px] text-rose-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Angular CLI,Services,Type Script,Observables  
                </div>
               
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-[#FF3C00] mr-[20px] ml-[5px]'>Svelte</span>
                 
                </div>
                <div className='text-[17px] text-[#FF3C00]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Gaining Popularity
                </div>
                <div className='text-[17px] text-[#FF3C00]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Lightweight & Performant Compiler
                </div>
                <div className='text-[17px] text-[#FF3C00]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Lowest Learing Curve
                </div>
                <div className='text-[17px] text-[#FF3C00]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                SvelteKit , Stores
                </div>
               
                 
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-blue-600 text-[20px] font-bold'>Type Script</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[20px] rounded mt-[15px] '>

<div className='w-[90%] h-auto  text-[20px] ml-[20px]'>
<span className='text-[20px] text-blue-500 font-bold'>Type Script </span> Superset of javaScript that adds static typing and other featuers
  </div>  
</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
          <div className='w-[100px] h-auto flex flex-col  '>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px] ' src='data:image/png;base64,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' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[40px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center text-blue-500 mr-[20px] ml-[5px]'>Type Script</span>
                 
                </div>
                <div className='text-[17px] text-blue-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Static-Type Checking
                </div>
                <div className='text-[17px] text-blue-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Class & Module Support
                </div>
                <div className='text-[17px] text-blue-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Other ES6 + Features
                </div>
                <div className='text-[17px] text-blue-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Code less prone to errors
                </div>
                <div className='text-[17px] text-blue-500'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Code is More Robust and definitive
                </div>
               
                 
                </div>  

          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[20px] text-cyan-400'>Ui Kits ( Choose One )</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center  justify-center  p-[20px] rounded mt-[30px] relative '>
            <div className=' absolute top-[-20px] '>
              <img className='w-[50px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap  '>
                <div className='w-full flex flex-row items-center md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' />
                  <span className='text-[20px]'>Material UI</span>
                </div>
                <div className='w-full md2:justify-around flex flex-row items-center mt-[15px] '>
                  <img className='w-[80px] mr-[15px]' src='https://avatars.githubusercontent.com/u/54212428?s=280&v=4' />
                  <span className='text-[20px]'>Chakra UI</span>
                </div>               
            </div>
            <div className='w-full flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://camo.githubusercontent.com/2ffbfe05e9ebe06e9f5e0aa0e01319076b31eca5a0ce52b671e55ba9165eabe3/68747470733a2f2f6f6e73656e75692e6769746875622e696f2f6172742f6c6f676f732f6f6e73656e75692d6c6f676f2d312e706e67' />
                  <span className='text-[20px]'>Onsen UI</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://avatars.githubusercontent.com/u/6853419?s=200&v=4' />
                  <span className='text-[20px]'>React Bootstrap</span>
                </div>               
            </div>
            
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[30px] relative '>
            <div className=' absolute top-[-20px]'>
              <img className='w-[50px]' src={Vue} />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[50px] mr-[15px]' src='https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png' />
                  <span className='text-[20px]'>Vuetify</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src='https://avatars.githubusercontent.com/u/23659108?s=280&v=4' />
                  <span className='text-[20px]'>Vue Material </span>
                </div>               
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://buefy.org/static/img/buefy.1d65c18.png' />
                  <span className='text-[20px]'>Buefy</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around  '>
                  <img className='w-[70px] mr-[15px]' src='https://bootstrap-vue.org/_nuxt/icons/icon_512x512.67aef2.png' />
                  <span className='text-[20px]'> Bootstrap Vue</span>
                </div>               
            </div>
            
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[30px] relative '>
            <div className=' absolute top-[-20px]'>
              <img className='w-[50px]' src={Angular} />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center md2:justify-around '>
                  <img className='w-[50px] mr-[15px]' src='https://camo.githubusercontent.com/c5b95fc653e7928d7277fa065cd098187cb9b7ea2d4d976cef5215a0676d2424/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f7061676573406d61737465722f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67' />
                  <span className='text-[20px]'>Angular Material </span>
                </div>
                <div className='flex flex-row items-center mt-[15px] md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src='https://avatars.githubusercontent.com/u/14283866?s=200&v=4' />
                  <span className='text-[20px]'> Angular  Bootstrap </span>
                </div>               
            </div>
            <div className='w-full flex flex-col flex-nowrap ml-[15px] mt-[10px]'>
                <div className='flex flex-row items-center md2:justify-around '>
                  <img className='w-[60px] ' src='https://avatars.githubusercontent.com/u/30223759?s=280&v=4' />
                  <span className='text-[20px]'>Ng-Zorro</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] md2:justify-around '>
                  <img className='w-[70px] mr-[15px]' src='https://mdbcdn.b-cdn.net/img/Marketing/general/logo/big/mdb.webp' />
                  <span className='text-[20px]'>MD Bootstrap </span>
                </div>               
            </div>
            
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[30px] relative '>
            <div className=' absolute top-[-20px]'>
              <img className='w-[50px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='w-full flex flex-row items-center  md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://blog.logrocket.com/wp-content/uploads/2021/10/svelte-material-ui.png' />
                  <span className='text-[20px]'>Svelte Material </span>
                </div>
                <div className='flex flex-row items-center mt-[15px] md2:justify-around'>
                  <img className='w-[60px] mr-[15px]' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC3CAMAAADkUVG/AAAAflBMVEX////qgPzqfvzpd/zpefzpe/zpdvz++v/qgfz//f/98v/99P/odPz41v7rifz99v/voP342v7riPztlPz30/776P7wp/364v7unP3sjvz0wP32y/754P7xrP387v/2zv7zuv3ys/3zvf3vpP3wq/30w/7umP3ytv3unv3obfzr5q/DAAARtUlEQVR4nO1diXLquBINWozDbsBsJixJWN7//+CzIckNWOe0ZEPInZmuqamZqsjYrVb36dMt6enpP7mZ9FfTbpbtFotdlnWXafvR7/NgaabZdh9bo7X5EK21jUcv2bL16Hd7iPSTl7nSxirVuBKlcjXZ3rbraTPNfqu1WrXa/eZ93/je0spmSjv08V01Vtv5IWVP6U/H2fu8Fyujo0K9cW8/2YxXzz/1FTeV5GgMVcg3xcxfV65HPE93b3Obr7pcs59Pyv9L2dzIhrPX5V+mmP7rUPso5PNLjR6Nrx6R21kjwmrNVRPFb+O++CrPzdU06Y7X424yTVuP02P/YE2ASs4fqePFH3fR342IQr7GWGMGXfweafY+GtpOpE8+Pv+3jtR88tqly/U+0jzk5h6oktMnGrM5T2Qy0N5KVbqxcQWxdDdQUdnDF2svV81g97OKyaytoJEPtdjF09N6GAXpVNnO29UnJpPcNoihKWUiOyE2dluZzkN8iUMtjTh45eXDotkftSTveaz3GJN78JfpT+hkGzbJrnet9gClJyfA03wtUIDvKKt72b1Vks5NpS+6iVi7e2ptQz187t93d41IuwqGf0NRpmcreHhl4jtay0Tf4UvDvq/iMN1L7qOS/uiBS6euKH28R26axpUD8a8Qa3Y318myViD+FaJHcsoQppPakfgXiFLLW+ok6Tz6g24iqrP4Tydl0cdbYZb07/cnX2LntyH2WhWB+e8UO7+Fu232/kk6ybXSu4FW9oH45NfblYprl18Ovtj+xN4XNHaesjvp/V8jaljT2yZ+OlHaxIPNelmUKPrt1XL9OlD+5NpPi93X0knbZ8KVMW/jcmqRZgMTELfOLL76EQszL3WUMpdf0Xbma2iOy5FnDUR31Hz/9vJ+HA07UQCLVFGiGonQTlw8Kpo4Kzof0hK9dKGQ/aabftPrKnmd6Ttjo05lLqEl6URFM6aSp+eh8GnK2Hfn6z2Pj5GnTyo8/Km8cS6q+SlFxVVBnGT7Zijoe8INRUUjvPKe+guZ4s7tLOoNttk4mU6XyXi3HQw9ykmF2Ek1nay5oSh9EB4wpg9QeiDVZrKYEVvKRr1Dcg3F2us88HmoRVcrgHCNy4k4DV1Kzz0S+eYGGovSww1QajMZyL5axVWQ7SulH21PxIUDsniU8iSTQQFB6RFduqutkny8ffN7g+/SpwvayPiH4T4z8qdMt+XFkKtENLP+i7SIKiygLdO0GcgPIJEnkrzRhYyvv0508GeRqlQqDnmLQtrMSfroZAHfSHXWYe+SXhitira+AxecRTXeD/qQDTEUc5THN6GnU1Fwgbf17WFBTOuSB/VOWGtCk0QOO/J4wAtSqtIVmiRWX1oJJInaQ+YFVC/oLTK8HL1iWR+tPmUqNQJ8UqI+Rnopc6YVHZQDEbpN+5gvctPKVCwznJGkDsehzzSp1QGFwxS7WeMTOZoReonrzjdveclt17xXGNhnCZia+T8Ix2M19xmPQo+XRoH0lKmWr1DmPfKfpRg+JvJyk2C8qkN5LTsBs3ohXQIvVMM3XcZg1HpxVuAtlK1V+n+pTMNvCYrz+6Intnq0l14HbkPRgaDtdsLKNL6wCT7DvPoM77vdbIhTu7FMkeNveIOVFbQ27VUc2LnHdyhLd19hC8hsfJ4AkZv1Sxb2TkPzXrz3kGccOvKp9gkeb+gB2muuAZqNbtwzEyYJW0A+eQvSqmdEHTsN7aGGkssbgftaZrzaaLgER5vJZjIbHNx8d/RAj1III82UFa14ClCKMLS9Vboo8bk5Ay8TvatkBMJZkSACwUNYPV3e+GsehlG+hFVsIomaRFQIbbrcCa2CRjDQdDHo9UZvuzt64xVD+0oY7I6oPHJ1iXM//ShfPem+Y4oKuzJ6E/yx3sLqE1IcAKk2qzS2pFqeoX2Ji86f4aZCV9rzNNtlHkQNQ/sdjvaRSyGTLdRHcytjP3m4MDMbxhHm6fOsc9otF02kUhQKIafPoz/bB0ohBtaW2vaVItO/u1p6Yd0jrdGXN7ORhDdeGNpneR3yR8TPonj1RymEmkpLg6OAPonkIuZJfScc7RMkhahIg6HbUSrcWsIjlqurAU1p3atCmaRPyjcRyIEWHiGsmf7PCsUz6DJM7yrV6hobiX0nrMBN0D6i3UhEFjtCDMZGzqXnWxsq4zEptLJWCKWgp+4CB1FHKST4OHGmHz3uREdSBaYa2q+gFKmLi2WD7qXnV6WaOcaKRBpD+7ARAS4fPNuAk/02FiqlD6zMeHDc7rESkbZizEoDuPglUgp27GJIxp+IitY+3A14U4kKo2gfhMkKIVlsoyTzjiKXB/W/dn+dyFKw1R65XRJUClnmsMfg8wvx5Ln8wunTrJgDIS5ZItKmZFMX6ORBiNaSkifyDF+vif0RXHpyT5qb9yyq+AIBwebQXdlFiQxd5UJ7KVt68AVFtA/bAKzQsPHMtn27C8NIKUP2O4iE+VBKlaUn96RB5yARaRTtOzES+ikaJVeUUWFLrwVpTLFHAQIxpYTsiaJ91wyi9I6T+Qu2gOjSw9sixBYH2JAjle3ajFB2zf4BaFFIK1jHkGpUGimifcwaSWVzhvZdRW8U6YQ1njKalgIqPFJE+9gh1UH7URkjIUjLOcXcwhitRaEDHimh/SaMI1KDBOX2yxUu2ALLqKJCCK0itGHAMCKi/TG2MgHtbxjaL6fL0LIMB5lLjBSVpeEAjxTRPsQCoj4Zt18OKrDbWjqDhJD6BL7RkaohoFOcd4lon6bL1/MPW96kOhrp0xbmDXeti1u44CYApWqg/dLP9jGcEpRP9oJFvCiD8wRCWZwF61PInijaL/0sylwl10BGUlBbCPYNNL14ovqU0D5bQPHVp+KfkZAiqZ8KjZXYN4hoH+vz+sOuBc9huaRAmACp9wZjdgk4YEJMQvsYcki1ErivopDrjS+YdBVpLYwUteD3YIgU0Wn17Imi/atPJam1hLzxXgcpjuBERkT7OHuSHBJF+5e+ltRclRVq+xgpSkkabnaNBLSPZ4L3gND9KqV8lOyWE/vDKi8DfAqAiE5x9iTpk6H9q+jVYn8qNEkuYaCT/B5eteI+oer6JGj/2lTesamIRWyMFKUaMWx2FdEpTO3F7AmPLHkVlllLRWyM9iXWCGMBEe3DWayD9q+Te5YYSEVsks8LcQSHSInbJ/oU0H6TUB5X/APq8ipEBA44T5BYIxgixeBaXZ94DksInrllqYgNdvw0ZL+Hy98i2sdRT0L7R7xl8pqCZf1J1dG+5Pcw2pe8NE7RpajXJhnblZURIk3m2THGlGrEOLhKGQYOrgK7TNomSg6edcdKtBaOXpLfw4SY5KVxci/OIZ6Ja/zBDjwQ0zuC9gW/h8sWRsgwcIVLStEJbLyOtKxsLhWxmd/jA3GItMLWTJKcGMEJwrctk2OMhJGK2BgpSn4Pe0xhvznp3JIcEjSV8spjGxFqoH2J5YDlb6lwTkq3UtTD5llas/i8HA+0D39H8nu4/C3U40jznRKKVvBLHcQ5K5tL/AjmhaU4gmFOh2YYNGPjUQ/yArbsoykJI6F93AVyL7TPihbCeZHoJ10YvM7eb7zDU0L7hEqjv8mglRD14NZJ1zDWYCkFOpKkCbELwxyK9mlHL496uIPOgchq7f3Gy6A6xmS/yRgjKerBjl7XqFpoH/tawUtjUpP9Jj8Al88EAmXOOiMuLXvs/YbLQDx1BFNpxNfSrV/59zFuH+FhdwF9TRaQyO2jZaCkgTjzYiVivqFEMScIutobduP8c9YkKxWxUdIr7/OHhBhDcMLBwix7QsU4AFJbzNdKe78B2vfYpoHmgq0flq0VQlwZQn4KoL46aB90gXgcHQIP9cTb2vDZL/LPttEcID6gxt5vkID6nAiB0D7Bw9K2cWJlqB4AbZqifYlnd6J9iTA6Cci8iKWIm9RwKRwlsNj7UbQvRFfXFPgdvOOeC4bX+caJBuskDVcKPQJfalkto32xd+FDnHPBmnLFi3dwlhC8fPiR1WIkKc2fo9HbKc65YHyRvG8c+iOEhtkc1EL7V+ly5HWIXiGOuWDFYXie1NdgvPTgljhSxmZb4sQidvL9IB4VBdzyVp4L1ofDAsL5tzHfjtYCbX6k3L604S8xnx+nTBxyUG9pLii1RU5cPgtpdEFjeTNUHbT/1J9oba01Og68RuaKuuBHlYowhQQudIwo76Bn24/FInaulvFme8jCj/1efzucqGFVJU7kUxi3hehogeRgaL/e7UpUpo0PP61sZ0B1L7kUTdwDzMor19FkhdaS3byjtY7irWBn/P6QRsQKJIi0EzPelDUihB4wFST9dDmVz4SgZ3xbHvQQxyQfW1IH7d9fQFZgbf6PVu98GSCFepw3S/d+3+P26hBxxh41PEwG76+JUOSF7kjazvMk7P1+8KGZ7qYyaefjh8COBZ+jkOje78eemuneUO15jQ+KPV4X3tTi9u8qYJ+K3wHusP2D5AXfhJ70VOHKqZuJmwwWqwZngY0EnhfaB+wG+UkB++D9Vg8ug3qeroZPkPfo5LmfgLk2dQYHoC960lPFSw9zqXyhy0nA5ha/U+1xQ5m0H/SPsE6eyhEo+1+16xLPgkC61w0GpDvf/94qeq6rrXD91dPpaMwaS68PQKUfdML7eEJyF4b21bBKXC5orxqxCzl/LzdLmk2k3XbfhRb37Tz8Ou/zXYMeh/q75Yi6kHwmGlnZSSkh97XTg77DtfJ5eHFF+uENdjb6OO892QQVZrsM7TdsL8w7vHyqWKkqOeUEHgEh1S4L2bLtcmHXvtG93zlcCbhkYvXtus0qd9POcHuch0dht4d7ngD7RxjaLyh77/h6eQ1BsFaa+KJBn9DDGpIq4HPeHqM6E68lNL2+lVXFIb7tKWUbAGVwQHbKVTAU3t1ciG3IXm41cNz7awPmJyP3/3qclH19Ov2lVEnkBJZYvtU4nWgnVeZ99UR7QIsuoqkyH+vVa+UQscKv9DxDb9bPRk6VFGJGXn56Z1kIFOe5uRe4/0rQnHfyntVi1Fu37DpX66Nih00qDyQ57vG7v6U61JJekOtNY5aE3eLw9X1W29FhPe2fAV1zlWSTYWSEA2yVGWYUAY7n/DZxCaI8O24xv3wAuymDPlk8Bv1TMUZHaphLrCNt6O1If9SiNmgRpYdYvGCd2353WKMSL4jY+fD9K0/i//dF9Wr0Wvq2ZrIdRqJaeZthIphZw+fCLCwMD95Acr3Y2XbXTVurVZpOx6/vvY72MDQVkyRqPBdurWp4NNxQGXi4lXpSrD0d5aLzhee18opBWm2deknetWgljdpcM724+oFSOPjBa/ItwVwli5mFMOBCvG9IASIdhP5AKa4gM2q+P04mx/389D9+72rr3Ot8ngBfk36MFN69uB4xYO6qpOrXkkq3qP1lokw1lvlSpr/bVkLlRgW99Pf6lXARb2PzlVXs5dT/BpHuYguQ5ujueOVnJKTvWZaXzj9hCd1WJ8UdKn+9VtTN/MmXtEc+APoXi/JsegqTnfmb/a2Nb4FPytIeyAnobxUzultvmgdV4RJlHuyRVHS/Nvpc1sNgtSgd71bHR3okq+7hTi7U0gv5vjzHH52ov25c1VrqalPp2Q+0dSYz7fmBF2zQwlaBgMpU1uZZrKrXWeYtrUVB2QtfY3X0dpF9NTe+yvzzRZ1B+rSupM2Pt4hewvtpKstqMYq0deeKSlnT6R3K+ejzQgWsPWWi9xO39rzxo9TKT+gMAhokbiLPyesgjrQxZ5rnTPgYrTvx7DBGhfTuTLSxT418K0A2t8FGVpjZ7D7YRJT2dLzYTma9Xm8+2h/fD1mSCnWm1m7Ey2W5brWe7S7nuLkQq0FXStWTB6mkorSzYxwZW2YRi4UXqdHBuVWlu/d28FYPF4/cSVBRntNsMo9jW9Q2TlLsmLO92XZNLK21m8v8dK6RxtvjGuZrS7PZXy2743W2y9bdZdrymNxWNoihYgpD0/Gk+7Bu+cfJ83T3NrT6m3//cPGmMX/JJJf2T5b2dL2Z7OdxYR6N4Xw/2eyS1b9YH//JD8j/Aau8BTkVYo76AAAAAElFTkSuQmCC' />
                  <span className='text-[20px]'>smelte</span>
                </div>               
            </div>
            <div className='w-full flex flex-col flex-nowrap ml-[15px] mt-[10px]'>
                <div className='flex flex-row items-center md2:justify-around'>
                  <img className='w-[50px] mr-[15px]' src='https://svelte-materialify.vercel.app/logo-192.png' />
                  <span className='text-[20px]'>Materialify</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] md2:justify-around'>
                  <img className='w-[70px] mr-[15px]' src='https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/21327/sveltestrap-2.jpg' />
                  <span className='text-[20px]'>Sveltestrap </span>
                </div>               
            </div>
            
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[20px] text-white font-bold'>Sever-Side Rendering ( Choose One )</div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px]'>Next.js</span>
                 
                </div>
                <div className='text-[17px] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                React Based
                </div>
                <div className='text-[17px] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Data Fetching Methods
                </div>
                <div className='text-[17px] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Image Optimization , SEO, etc
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-square.svg' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px] text-[#00C58E]'>Nuxt.js</span>
                 
                </div>
                <div className='text-[17px] text-[#00C58E] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Vue Based
                </div>
                <div className='text-[17px] text-[#00C58E] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Data Fetching 
                </div>
                <div className='text-[17px] text-[#00C58E] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Automatic transpilation & Bundling
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://avatars.githubusercontent.com/u/64235328?s=200&v=4' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px] text-[#E8F2FF]'>Remix</span>
                 
                </div>
                <div className='text-[17px] text-[#E8F2FF] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                React Based
                </div>
                <div className='text-[17px] text-[#E8F2FF] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Loaders & Actions
                </div>
                <div className='text-[17px] text-[#E8F2FF] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Most Control Over HTTP Request/Response 
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px] text-[#FF3C00]'>SvelteKit</span>
                 
                </div>
                <div className='text-[17px] text-[#FF3C00] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Svelte Based
                </div>
                <div className='text-[17px] text-[#FF3C00] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Advanced Routing
                </div>
                <div className='text-[17px] text-[#FF3C00] '>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Code Splitting & Other features
                </div>
                      
                 
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[20px] font-bold '>
              Static Site Generators ( Choose One )
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://www.pngitem.com/pimgs/m/772-7727119_gatsby-png-transparent-png.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px] text-purple-900'>Gatsby</span>
                 
                </div>
                <div className='text-[17px] text-purple-900'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                React Based
                </div>
                <div className='text-[17px] text-purple-900'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                GraphQL Data Layer
                </div>
                <div className='text-[17px] text-purple-900'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Image Optimization, Code Splitting & More
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px]  text-[black]'>Next.js</span>
                 
                </div>
                <div className='text-[17px] text-[black]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                React Based
                </div>
                <div className='text-[17px] text-[black]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Exports Fast Static Websites
                </div>
                <div className='text-[17px] text-[black]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Data Fetching Methods
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src='https://gridsome.org/logos/only-logo.svg' /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px]  text-[#00A672]'>Gridsome</span>
                 
                </div>
                <div className='text-[17px] text-[#00A672]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Vue Based
                </div>
                <div className='text-[17px] text-[#00A672]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                PWA Ready
                </div>
                <div className='text-[17px] text-[#00A672]'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 SEO Benefits
                </div>
                      
                 
                </div>  
          </div>
          <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row items-center p-[10px] md2:flex-col  rounded mt-[15px] '>
             <div className='w-[100px] h-auto flex flex-col mr-[15px]'>
                 
                 <img className=' m-[20px] w-[100px] h-auto mb-[0px]' src={jekyll} /> 
               
              </div>
              <div className='w-[90%] h-auto  text-[20px] ml-[20px] flex flex-col '>
                <div>
                  <i class="fa-solid fa-check text-[20px] text-sky-400"></i>
                  <span className='text-[20px] font-bold hover:underline text-center  mr-[20px] ml-[5px]  text-rose-600'>Jekyll</span>
                 
                </div>
                <div className='text-[17px] text-rose-600'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Built on Ruby
                </div>
                <div className='text-[17px] text-rose-600'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                Been Around a While
                </div>
                <div className='text-[17px] text-rose-600'>
                <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>  
                 Liquid Template Engin
                </div>
                      
                 
                </div>  
          </div>
          <i className="fa-solid fa-arrow-down text-[40px] m-[15px] text-teal-500 animate-pulse"></i>
          <div className='text-[30px] font-bold text-amber-400 text-center flex flex-col items-center '>
            <img className='w-[150px]' src='https://i.pinimg.com/originals/53/f4/53/53f453619f08950d053d30e6c562c8a0.gif' />
         <span className=' animate-bounce'>Finish <span className='text-blue-600'>Fontend</span></span> 
         
          </div>
       </div>
    </div>
  )
}

export default WebFontend