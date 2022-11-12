import React from 'react'
import Nodejs from '../img/NodeJs.png'
import Python from '../img/Python.png'
import Flask from '../img/Flask.png'
import Laravel from '../img/Laravel.png'
import Spring from '../img/Spring.png'
import Strust from '../img/Strust.png'
import MySql from '../img/MySql.png'
import FireBase from '../img/FireBase.png'
import SqlLite from '../img/SqlLite.png'
import Java from '../img/Java.png'
const WebBackend = () => {
  return (
    <div className='w-full h-[auto]  bg-gradient-to-br  from-black to-[#315e59] overflow-hidden mt-[55px]'>
       <div className='w-[90%] h-auto  m-auto flex flex-col items-center justify-center'>
        <div className='text-[30px]  font-bold mt-[15px] text-white text-blue-500'>( Choose One   )</div>
        <div className='fonr-bold text-[17px] text-white m-[15px]'>[ Eg = <span className='text-blue-500'><span className='text-[#FFD242]'>Python </span>,<span className='text-[#186045]'>Danjago</span> </span> ]</div>
        <div className='text-[25px] text-[#FFD849] font-bold '>Python</div>
         <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[30px] relative '>
            <div className=' absolute top-[-25px]'>
              <img className='w-[50px]' src={Python} />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='data:image/png;base64,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' />
                  <span className='text-[20px] text-[#092E20] font-bold'>Django</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src={Flask} />
                  <span className='text-[20px] font-bold text-[#000000]'>Flask </span>
                </div>               
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px] ' src='https://cdn.worldvectorlogo.com/logos/fastapi.svg' />
                  <span className='text-[20px] text-[#019688]'>Fast API</span>
                </div>
               
            </div>
            </div>  
            
            <div className='text-[25px] text-[#8A94BF] font-bold'>PhP</div>
         <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center  p-[40px] rounded mt-[20px] relative '>
            <div className=' absolute top-[-35px]'>
              <img className='w-[100px]' src='https://www.freepnglogos.com/uploads/php-logo-png/php-logo-parental-advisory-explicit-content-logo-png-transparent-3.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[70px] mr-[15px]' src={Laravel} />
                  <span className='text-[20px] text-[#F7503C]'>Laravel</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src='https://seeklogo.com/images/S/symfony-logo-AA34C8FC16-seeklogo.com.png' />
                  <span className='text-[20px]'>Symfony </span>
                </div>               
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px] mt-[10px]' src='https://pbs.twimg.com/media/CQolRlrVAAAnrpC.png' />
                  <span className='text-[20px] text-white'>Slim</span>
                </div>
              
            </div>
            </div>  
            
            <div className='text-[25px] text-[#418D3B] font-bold'>Node JS</div>
         <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[20px] relative '>
            <div className=' absolute top-[-26px]'>
              <img className='w-[90px]' src={Nodejs} />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://www.sohamkamani.com/nodejs/expressjs-architecture/express-routing-logo.png' />
                  <span className='text-[20px] text-[gray]'>Express</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://www.fastify.io/images/fastify-logo-menu.d13f8da7a965c800.png' />
                  <span className='text-[20px]'>Fastify </span>
                </div>               
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px] mt-[10px]' src='https://miro.medium.com/max/1000/1*suXzT3k1lYrtR91XRDN7gA.png' />
                  <span className='text-[20px] text-white'>Koa</span>
                </div>
                <div className='flex flex-row items-center mt-[15px] w-full md2:justify-around  '>
                  <img className='w-[20px] mr-[15px]' src='https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png' />
                  <span className='text-[20px] text-[#E0234E]'>Nest Js</span>
                </div>               
            </div>
            </div>  
            
            <div className='text-[25px] text-[#546E7A] font-bold'>C#</div>
         <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[20px] relative '>
            <div className=' absolute top-[-30px]'>
              <img className='w-[70px]' src='https://img.icons8.com/color/480/c-sharp-logo.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px]' src='https://secrethub.io/img/aspnet.svg' />
                  <span className='text-[20px] text-[#1576BB] font-bold'>ASP.NET</span>
                </div>
                        
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[90px] mr-[15px] mt-[10px]' src='https://i.pinimg.com/originals/47/59/62/475962f5d15ebeab44c38ef07566ab13.png' />
                  <span className='text-[20px] text-[black]'>ASP.NET MVC</span>
                </div>               
                       
            </div>
            </div>  
            
            <div className='text-[25px] text-[#E76F00] font-bold'>Java</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[50px] relative '>
            <div className=' absolute top-[-46px]'>
              <img className='w-[50px]' src={Java} />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[50px] mr-[15px]' src={Spring} />
                  <span className='text-[20px] text-[#77BC1F]'>Spring</span>
                </div>
                        
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px] mt-[10px]' src={Strust} />
                  <span className='text-[20px] text-[#477FC1] font-bold'>Strust</span>
                </div>
                          
            </div>
            </div> 
            
            <div className='text-[25px] text-[#A71100] font-bold'>Ruby</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[50px] relative '>
            <div className=' absolute top-[-23px]'>
              <img className='w-[40px]' src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[100px] mr-[15px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png' />
                  <span className='text-[20px] text-[#CC0000] font-bold'>Ruby on Rails</span>
                </div>
                        
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px] mt-[10px]' src='https://cdn.glitch.me/project-avatar/7ea2383a-d0c2-4937-9f53-71c01f93d18b.png' />
                  <span className='text-[20px] text-[#E3DDD5] font-bold'>Sinatra</span>
                </div>
                          
            </div>
            </div> 
            
            <div className='text-[25px] text-[#00AED9] font-bold'>GO</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[50px] relative '>
            <div className=' absolute top-[-43px]'>
              <img className='w-[100px]' src='https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src='https://raw.githubusercontent.com/gin-gonic/logo/master/color.png' />
                  <span className='text-[20px] text-[#0090D1] font-bold'>Gin</span>
                </div>
                        
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px] mt-[10px]' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAQDxMVDw0NDxAOEBAQFRAQEA8PFREWGBYSExcYHSgiGB0mGxUVITIhKCorLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGyslICUtLSsuLy0tLys1Mi0vKy8rNy01Ly0vLS0tLSstLSsrKy0vLS0wLS0tLS0tLi0tLSstLf/AABEIANYA6wMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAAAAQQDBQYC/8QAPhAAAgECAwQHBAcHBQEAAAAAAAECAxEEIVESMUGRBRMVYXGB0SIyodIzQlJyscHwFiNikqKy4QYUNFOCc//EABsBAQEBAQEBAQEAAAAAAAAAAAABAgMEBQYH/8QANxEAAQMBBQUGBgIABwAAAAAAAQACEQMEEiExQRNRYXGhFBZikuHwBSKBscHRMpEVIzM0UnLx/9oADAMBAAIRAxEAPwD2pWAfytfpkARQohSFCiFCKEQEKFEKARRAChSUAAVlQABSVAUgVQAFVXyCkCqgDAVUAAVCEKQIqAAiFIUKIUIBRUoIgoqAUiiAIoUQFKFFCH0Ai+QUgVUBSBUKEOWVGSSk42i9zatfwOM05rm4OEKAyh8yPohFtQhSBEZCkYVRAIBVGAwFCqgEAioQEQovoGnoylGdaEJZxe1dZrdF+huq/wCyjJxcZXjdPOW9eZ7aFhdWpbW+xom78xIxgHcdCuD6wa67BJicAuoRTsOkMHCMI1aTvTk7Z8H+kydD4aFScozV0o6tZ3WniB8Pq9oFnwvHIzgcJBkTgRwTbNuF+gWAp2m3gfsv+r1M2MeHaXUqSd899viKth2bC/a0zGjXEk8hdH3UFSTF1w5hZgb+i8PTnGq6iuqaW5tat7vA5NvBaP4+ppnw5zqTapqU2h0xecQcDH/E7t6ya0OLQCY3LrQc+MlRbXUqytnv391zio0pTkoxzbf6Z5H0i2ps2kOMx8uIPLKdy6B0icua+CHbVqOEpPYntSkkrtX/ACOtxLpub6vKHDU9FpsTrOPmewmYLQ6SOYjTLM4rLKofkDzIXERn1GLbSWbbyWrO6qVKWGjCEoqc5LPdfxz/AFkLJYu0BznODWtzJBOJyGGZ+yVKtwgASTosuMxtOVCEIu84uN1mrWjbf5nWHb9r0P8AqXKHoMbRhVoqrSiouN7xyWXG9tN59G2WftZNRlVr3NaMAHCQ3XGccZ46Bcqb9ngWkAnhmV1BDtej+jYyh1lV7MM9F3b+B1k0k2k7pXSe7LU+ZWsdWjTZUeIDsRjjG+Nx0XpZVa5xaNF8EKQ8q6IRlIFUQCAVRgAIqgQoUVEQgFFt6G/5EP8A3/YzTi+iakqk5K1pTbWfBszdDfTw/wDf9jPjHYioqtRKUklN2SbyzPr0H0G2D/OBI2hyIGNxu9eV4eavyR/HdOpW7Hx6rD06Ld5tt5brXbf4on+nn+8n9x/3RGIk5YSDqe/tZPi1n+R89AfST/8Am/7onsaR/idnLcBdbdGoF04HiuJ/275zk/dcFfoqrCLlJKy32feZEj6dabycm1pwIj4NepQc4bAECNSCegC9bWvH8ughdr0LBuniIre0kvFqSMeJ6OqU47UrWvrfM19EO1PEWyahl3ezI63rZP3m3zPo16lFthoh4N6HXYIAHznPAyuDGv2riMpGnBEjtOj5KnQqVkryTt4bvzfwOqudnR/4VT7y/GBx+Fvu1H1Bm2m9wO4gZ9VquJAHEfddVJtttu7bu3qyo39GY9wcKajdOaV/FpE6Y+ll5fgc3WZhs23bUnEAiMiROcmecYrQeb9wjqufoejGKlWlugrJd/E6vEVnUnKct8nu0XA29EYnZm4S9yrruvw57uRwY3D9XNx4fV8Gemub1hpbP+IJvf8AfQnhGA3YBYZhWdOcYcv/AFZtk39C4rYqbEvcqZefD0MB2fRGHSvWnlGne35nH4XtO1MLMwZPLWeET0W68bMz7OiydJ0HTqOF3sX24q+Vn3fAynNisQ6k3N8dy00RxHntLqbqrjT/AIzhy95cIXWmCGi9moQpDgtoRlIwqiAQCqAAIhSIoUQpChRcuHrunNTSu48HuzTX5m7tt/Yj8TrC2PXQt1eg27TdAz0zy1HALk+ix5lwlc+Kxs6rW1klujwRcHi3Sk5JJ3Vs/FP8jOgc+01drtrxvb+n2TZtu3YwXZ9tv7EfiZ8XjnVSTio2d+8y2CR2q/EbTVYWPeSDph+lgUKbTIC04PHOltWSlt2ve/C/qau2n9iPxOtsNkUviNppMDGPIA5b53I6ixxkhaMXi3VabSjZW8fEuEx06V7WcZb136mZBo4i11hV2143t/Tl0Wtm27djBdi+m5cIRT8zBOrKcnKWcpO7PmwNWi2V64AquJjl+AoykxmLQpxT0dzv8dGg2p1JXsrKKe/vyzOgZ8bJuy2vYMewsDg6M8pE6a55SPqpUpXiDMROS7Zywej/AKji6RxsJQjSpXUFv4X09Tr9kqRp1veWOY1jG3hButgxuVFASCSTG8yiIykPCu6EDARGQAKogCBVCsiKEQpAFFSkARUpAFF9AAKIUgCioIUiICkCIAQIgACIAQqqgBAqgBAqgAQQIyFIFUKek/Z+hrLnH5R+z9DWXOPyn2+71s8Pm9F5O20d/RebB6XsCjrLnH5SdgUdZ84+g7vWzw+b0U7dR39F5sp6PsCjrPnH0L2BR1nzj6Du9bPD5vRO20d/RebKej7Bo6y/p9B2DR1lzj8o7v2zw+b0U7bS39F5wp6LsGjrLnH5R2DR1lzj8o7v2zw+b0TttLf0Xngeh7Bo6y5x+UvYVHWXOPoO79s8Pm9E7bS39F50HouwaOsucfQdhUdZc4+g7vWzw+b0U7ZS39F50HouwqOsucfQdhUdZc4+g7vW3w+b0TtlLf0XnSHo+wqOsucfQdg0dZc4+g7v2zw+b0TtlLf0XnQei7Co6z5x9Cdg0dZc4/KO79s8Pm9Fe2Ut/RedIej7Bo6y5x+Udg0dZc4/KO79s8Pm9E7bS39F5wh6TsGjrPnH0HYFHWXOHyju/bPD5vRXttLf0XmyHpewKOs+cfQdgUdZc4/KO71s8Pm9E7bR39F5oHpOwKOs+cfQfs/Q1lzj8o7vWzw+b0V7dR39F5llPS/s/Q1lzj8o/Z+hrLnD5R3etnh83onbqO/ou3AB+5XxEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAcdSoopyk7RSu2cEZVZbkqceDkm5PyurGHVADdzO4e8PrC0GyJVr1nfYgtqbXHdFas+epn9apJv+FRivJWfxGAT2NqWcqj227Wy+r8LGw4027Roe6cchMQNMtddYyGGeibhgLFKU4Zye3Bb3uml3pZS+HmaoyTSazTzTXFH2Y8NHZlKH1Vacfuyvl5O5sSxwEyD9YMTnuMHPI75AE/kJ1H2WwAHZYQABEAARAAEQABEAARAAEQABEAARAAEQABEAARZK/tVKcfqq9RrW1kvi/garGWs9mpTlwd6b7m7NfFfE1nKnF5/P8AA985WnZD3qVlwD/dQ1jFQfjHL8jUY09ibv7lR3vwjP8Az+PiapyS3tJd5KB+S7q3A/vkRj0zBVfnO/H3yX0Zl9N4U18ZO34M+v8AdU/tw/mj6nHg1tJ1P+x5d0FlFcs/Mjnte5rWmcZPID9kewqGloJIjRawAd1zXBia2xCUrX2U3bdc5zL0l9DU+4z4hUqVM4WhH6rabclrbKx5zVu1S3PAEAc3T+MzGWpXQMlk8T+PVbQYo15RlGNSzUn7Mo7r6NH3iK7TUYq85XaTyslvb7je2bBO7CNZ3RrOkYKXDK1AyT65Zpxl/DZx+N2fcMTFw290bO99+WoFUTBBBzx3b9R1wkSoWHTHktAMcHVmr+zBPg05O3fmhRrS2tiaSla8Wr2muNr7rZEFYSJBE5Ej2RwkCeZCpYVsBinXk5OELezbak87dyS3stSpOmrz2ZRW9pOLivDO427c4MDM6fvmQCBqcDC4VsBkpYldSqksrxuyQ66Wd4w0jZzt4u6ArtMXQTIB+h5wB9TJgxMFLhEzyWwGOjWe1sTSU7XTW6a4taf5Nhtjw8SFkggoADaiAAIgACIAAi4qtJTi4y3NfpmSWK6pWq8Pdla6nbw3M04ivGnFyk7Jc2+48tjcVKrNylu3RXCJ8X4r8QZYwC3/AFDkOHHhnGs8Ly9dmomrnl+eHv8AC9A6c6sPakowmslC0m7/AMW7lzPPdIYedObjN7T3qTu9o3dAYlqfVP3ZpuK0e/LyvyN3+oKSdFy4wad+55NHgtVOn8QsBtIm82SZM5Zjdl8wgDPiZ703OoV9noffPgcVi6Dxa2uqmk0/cbSunodjiY04SgtlxnUdlKmtm3jw5nnMJK1SDW9Si/wPYzmoptuySu29yR2+CVXV7KWPI+QiCQDhnw0BAM4Ybli1tDKgcNfuuDDVJPajK21B5vg01dNaGoyYSLe1Nq3WNWT3qCVlzzfmaz7tAksBPsTh0ieK8T/5e/eay9I/Q1PuM54JWVt1lbwOHHwcqU4xV5SjZLU4qU5U1syUpRWUZxW1daNbzm592sSRhdGP1OHrllMSFsC8wAZyfsFelPom+KcGvHbRxxc+uq7Ki7KmvabVsnustWz6ltVJRycacWpu++bW5W4K+fkfVaLU9uC2rrZlHL2rO6eel3zOTwXP2omARpmAHyQN3z7sQ3CcJ00gNu4Tj+P11XLetpD+aXymOpTlGOez7deD2U3bNxybtqtDS8S3lGE29JewvNv8rnxHC/u3Bv2pXlKS+3e914NItQbQFrSTgd0boyxn+hrpNabhkgDEe89Oq5r1tIfzS+U4ZUqkpQk9lKm28pSbd4tPgtfgfUcRKK/eQltLK8FtKXetPM+acXOalJbMYL2E7Xbe+WW7LKxsuD4EuOIMHDIg44YRE8TAGcrMRJgDA/bmvvAe7LXrKm147T/Kxonazvus7+FjI6coycoe0pO8oN7pW3p8shNTmtlx2Iv3s02+5aeJabixoYWmRhkYPGYgTmZIPDfHgOdenD3pn+1w0l+6w64dZD4bVvikdodfQobeHhH3XZNPRp3OSOJkl7cJX/gW2n334eZzszgxjb2Ra3HkMuH5nCSCt1Zc4xoT91cYvaoviqtvJwlf8EazDSpynJTmrKCahF2vd/Wdu7KxuPRRklzoiT+AJP8AX9ALk/IDd+5QAHZYQABEAARAAEWDHdHKra8pK27c0vI6qt0HVXutT/p/E9ID5tp+E2W0OLntN46gkH8j+wu9O01GCAcF5noyg6dVSqrq1Dad3xbVt/mzb0zioTpOEHtuTV0r7lmdyDFL4XsrO6z03w10ySJOIg43gMhGS060Bzw8jEccPt+V5bA9H1tuMnDKLT9r2U9P1Y75Ya7Uqj2ms1Fe5F624+ZrB0sfwylZWFjSSCZxjPkAPpMwcRipVtDqhmI9+8oQAH0V50AARAAEQABEAARYZ0pwk5QW0p2vBu1mla68rchUdWa2dnq9r617tLjZI3A4bAYgOIB0Ea56SJ4EcIW7+sCff0XHTgopRWSikl4I5ADsBGAWEABUQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARf/9k=' />
                  <span className='text-[20px] text-[#FDC204] font-bold'>Beego</span>
                </div>
                          
            </div>
            </div> 
            
            <div className='text-[25px] text-[#E87940] font-bold'>Kotlin</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[40px] rounded mt-[50px] relative '>
            <div className=' absolute top-[-20px]'>
              <img className='w-[40px]' src='https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' />
            </div>
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[60px] mr-[15px]' src={Spring} />
                  <span className='text-[20px] text-[#77BC1F]'>Spring</span>
                </div>
                        
            </div>
            <div className='w-full  flex flex-col flex-nowrap ml-[15px]'>
                <div className='flex flex-row items-center w-full md2:justify-around '>
                  <img className='w-[80px] mr-[15px] mt-[10px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Vert.x_Logo.svg/2560px-Vert.x_Logo.svg.png' />
                  <span className='text-[20px] text-[#092C3A] font-bold'>Vert.x</span>
                </div>
                          
            </div>
            </div> 
            <div className=' border border-[white] w-full m-[30px] animate-pulse '></div>
            <div className='text-[30px] m-[10px] text-cyan-400 text-center'>( Data Base Choose One )</div>
            <div className='text-[30px] font-bold text-white'>( SQL )</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[150px] ' src='https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg' />
                  <span className='text-[20px] text-[#3d7fb5] font-bold'>Postger <span className='text-[white]'>SQL</span></span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[150px] ' src={MySql} />
                  <span className='text-[20px] text-[#6599b9] font-bold'>My <span className='text-[#F8981D]'>SQL</span></span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px]  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[100px] ' src='https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-8.png' />
                  <span className='text-[20px] text-[#BBBABA] font-bold'>MS <span className='text-[#C7111E]'>SQL <span className='text-[#BBBABA]'>SEVER</span></span></span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px] animate-slideup   h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[100px] ' src={SqlLite} />
                  <span className='text-[20px] text-[#003856] font-bold'>SQLite </span>
                </div>
                        
            </div>         
            </div> 
            
            <div className='text-[30px] font-bold text-emerald-400'>( No SQL )</div>
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[100px] ' src='https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png' />
                  <span className='text-[20px] text-[#81C564] font-bold ml-[5px]'>Mango DB </span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[90px] ' src={FireBase} />
                  <span className='text-[20px] text-[#FCCA3F] font-bold ml-[5px]'>Fire Base </span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[90px] ' src='https://avatars.githubusercontent.com/u/54469796?s=280&v=4' />
                  <span className='text-[20px] text-[#181818] font-bold ml-[5px]'>Supa Base </span>
                </div>
                        
            </div>         
            </div> 
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className='flex flex-row items-center justify-center w-full md2:justify-around '>
                  <img className='w-[210px] ' src='https://download.logo.wine/logo/Redis/Redis-Logo.wine.png' />
                  
                </div>
                        
            </div>         
            </div> 
            
            <div className='w-[100%]  lg:w-[1000px] animate-slideup  h-[auto] bg-slate-600 flex flex-row md2:flex-col  items-center justify-center p-[20px] rounded mt-[10px] relative '>
        
            <div className='w-full flex flex-col flex-nowrap '>
                <div className=' flex flex-col items-center justify-center w-full md2:justify-around '>
               <div className='font-bold text-[20px] text-black underline text-center'>Authentication & Authorization</div>
                  <span className='text-[18px] text-center m-[15px] font-bold'>
                  Authentication is the process of  identifying an individual and authorization 
                  pretains to the permissions that individual has. 
                  </span>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>JSON Web Tokens 
                  </div>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Cookie & Sessions 
                  </div>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>OAut ( Login via Google , Twitter , GitHub   )
                  </div>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Authentication libraries ( Pasport , Grant , etc) 
                  </div>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Password hashing ( Bcrypt )
                  </div>
                  <div className='w-full p-[5px] border border-[black] font-bold mt-[10px]'>
                  <i class="fa-solid fa-check text-[20px] text-sky-400 mr-[5px]"></i>Protecting endpoints and routes
                  </div>
 
                </div>
                        
            </div>         
            </div> 

            <div className='flex flex-col items-center'>
              <img className='w-[100px]' src='https://i.pinimg.com/originals/53/f4/53/53f453619f08950d053d30e6c562c8a0.gif' />
              <span className='text-[30px] animate-bounce text-[#FAC11D] font-bold'>Finish <span className='text-sky-500'>BackEnd</span></span>
            </div>

          </div>        
   </div>
  )
}

export default WebBackend