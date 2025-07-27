import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MapsCard from './Form';


const LoginStyle = {
    color: '#6fbf8e',
    fontFamily: 'Montserrat, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: 400,
    fontStyle: 'normal',
};

const formcss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: 400,
    fontStyle: 'normal',
    flexDirection: 'column',
};

const inputcss = {
    width: '335px',
    height: '20px',
    border: '2px solid #6fbf8e',
    padding: '10px',
    borderRadius: '40px',
    backgroundColor: 'white',
};

const button= {
    width: '322px',
    backgroundColor:'#6fbf8e',
    padding: '15px',
    borderRadius:'10px',
    color: 'white',
    border: '2px solid #6fbf8e',
    marginTop:'10px',
    fontFamily: 'Montserrat, sans-serif',
    marginTop: '15px',
    
}

const underline={
    textDecoration:'underline',
    backgroundColor:'#6fbf8e',
}

const Search = () => {

    let found=0;
    const [article, setArticle] = useState([
        {
            "title": "The Rise of AI in Everyday Life",
            "author": "Jane Smith",
            "content": "Artificial Intelligence (AI) is becoming an integral part of our daily lives. From personalized recommendations to smart home assistants, AI is reshaping how we interact with technology..."
        },
        {
            "title": "Climate Change and Global Policy",
            "author": "Michael Johnson",
            "content": "Global leaders are taking steps toward combating climate change, but the path forward remains complex. This article explores recent international agreements and the challenges in implementing them..."
        },
        {
            "title": "The Future of Remote Work",
            "author": "Emily Davis",
            "content": "The COVID-19 pandemic accelerated the adoption of remote work. As companies adapt to this new normal, the future of work may be permanently changed, with flexible arrangements becoming the standard..."
        },
        {
            "title": "Exploring the Depths of the Ocean",
            "author": "Dr. Alan White",
            "content": "Despite covering more than 70% of the Earth's surface, the ocean remains largely unexplored. New technologies are allowing scientists to venture deeper and discover previously unknown species and ecosystems..."
        },
        {
            "title": "The Psychology of Social Media",
            "author": "Laura Chen",
            "content": "Social media platforms have transformed how we communicate and perceive ourselves. This article delves into the psychological effects of constant connectivity, online validation, and digital identity..."
        }
    ]);

    
    
    const [found2,setfound]=useState("");
    const [Searchings,setSearch]=useState("");
    const [IsSearched,setIsSearched]=useState("false");
    let Title=[];
    let Author=[];
    let Content=[];

    let [Temp,setTemp]=useState(article);
    
    let NewArr=[];
   
    
    

    const ChangeArtcle=(Array)=>{
        
        setTemp(Array);

    }

    const ChangeColor = (Array, word) => {
    let newword = [];
    
    for (let counter = 0; counter < Array.length; counter++) {
        if (Array[counter] === word) {
            newword.push(
                <span key={counter} style={{ textDecoration: "underline", backgroundColor: "yellow" }}>
                    {word} 
                </span>);
            newword.push(" ");
        } else {
            newword.push(Array[counter] + " ");
        }
    }

    return newword; 
    };


    
    

    const Search=(e)=>{
        setTemp(article);
        e.preventDefault();
        found=0;
        setfound(0);
        
        setIsSearched("true");
        
        console.log(Temp);
        console.log(article);
        
        for(let counter=0;counter<article.length;counter++)
        {
            Title=article[counter].title.split(" ");
            Author=article[counter].author.split(" ");
            Content=article[counter].content.split(" ");
            
            if(Title.includes(Searchings)||Author.includes(Searchings)||Content.includes(Searchings))
            {
                

                Title=ChangeColor(Title,Searchings);
                Author=ChangeColor(Author,Searchings);
                Content=ChangeColor(Content,Searchings);
                NewArr.push({
                title: Title,
                author: Author,
                content: Content
                });
                found=found+1;
                setfound(found);
                console.log(found);
                
                
            }
            else
            {
                alert("false");
            }

            
        }
        ChangeArtcle(NewArr);
      
    }

    return (
        <form onSubmit={Search}>
        <div style={formcss}>
            <h1 style={LoginStyle}>Search for an article </h1>
            <input style={inputcss} type='text' placeholder='Search....' value={Searchings} onChange={(e)=>setSearch(e.target.value)} />
            <input style={button} type='submit'></input>
            <MapsCard article={Temp} IsSearched={IsSearched} found2={found2}></MapsCard>
           

        </div>
        </form>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Search />
       
        
        
    </React.StrictMode>
);

reportWebVitals();
