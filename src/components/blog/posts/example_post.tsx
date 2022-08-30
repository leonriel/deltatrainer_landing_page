import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../media/blog/how-fast-will-you-lose-muscle (1).jpg';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';

const ExamplePost = () => {
    const history = useHistory();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById("blog")!.addEventListener('click', () => {
            history.push("/");
        });
        document.getElementById("mobile-blog")!.addEventListener('touchend', () => {
            history.push("/");
        });
    }, [])

    return (
        <Container className="mt-4 mb-5 blog-post-container">
            <Helmet>
                <meta property="og:url" content="url" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="title" />
                <meta property="og:description" content="description" />
                <meta property="og:image" content={headerImg} />
            </Helmet>
            <h3 className="mt-3 mb-2 blog-post-title">Lorem ipsum dolor sit amet</h3>
            <h3 className="blog-post-subtitle" style={{color: "#757575"}}>Lorem ipsum dolor sit amet</h3>
            <h3 className="blog-post-author-and-date-container"><span className="blog-post-author">Gabriel Ong</span><span className="ml-3 blog-post-date" style={{color: "#757575"}}>Jan 29, 2021</span></h3>
            <div className="blog-post-header-img-container" style={{height: "auto", width: "100%", overflow: "hidden"}}>
                <img src={headerImg} style={{width: "100%", height: "auto"}} alt="hello" loading="lazy"/>
            </div>
            <p className="blog-post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a porttitor urna. Proin vulputate eu lacus a suscipit. Phasellus lorem lectus, egestas convallis leo et, fermentum condimentum velit. Pellentesque dui sapien, interdum ac pretium vel, euismod at velit. Ut et iaculis sem, sit amet pellentesque arcu. Curabitur ornare congue tellus, tempus ultrices lacus volutpat nec. Nulla dapibus eros faucibus enim malesuada suscipit. Curabitur laoreet scelerisque orci, a congue sem porta vulputate. Phasellus tincidunt nec velit in mattis. Donec consequat arcu eu lectus mollis pharetra. Curabitur sagittis velit a posuere vestibulum.<br></br><br></br>

                Duis ornare felis at massa blandit cursus. Suspendisse vel turpis lacus. Suspendisse sit amet lacinia urna. Integer vitae tortor est. Cras congue elit eu hendrerit aliquam. Proin vel neque malesuada, interdum ante ut, posuere justo. Quisque ut tempor odio, non consectetur purus. Nulla vel nunc facilisis, sodales nisi sed, placerat tellus. Duis elementum volutpat efficitur. Curabitur consectetur dui eu metus malesuada, in volutpat nisl maximus. Aliquam erat volutpat. Ut egestas euismod est, a faucibus purus cursus sit amet. Pellentesque viverra dignissim massa. Integer purus leo, tristique at erat vel, tincidunt porttitor ligula. Phasellus fermentum quam blandit dignissim iaculis.<br></br><br></br>

                Etiam accumsan elit vel mattis accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a turpis vehicula, fringilla nisl eu, finibus libero. Proin vel mi sit amet eros aliquet posuere. Nam eu purus ultricies, varius mauris eget, posuere lorem. Quisque nunc nulla, faucibus et interdum sit amet, cursus vitae nisi. Praesent non ultricies neque. Donec finibus ipsum purus, pharetra pretium ex malesuada quis. Proin accumsan erat quis mauris commodo vehicula. Etiam maximus in dolor at molestie. Pellentesque dictum iaculis turpis quis lobortis. Aliquam placerat rhoncus justo, non hendrerit magna pellentesque in. Sed euismod, diam et sagittis rutrum, elit metus varius elit, sagittis sagittis risus mi scelerisque quam. Duis id gravida ante. Nunc purus nisi, tempus id feugiat at, elementum in augue. Integer a nulla sem.<br></br><br></br>

                Pellentesque aliquet est felis, sed tincidunt nibh viverra non. Duis iaculis eu elit ut consectetur. Aenean mollis lacus eu feugiat tristique. In sit amet erat augue. Donec sed lacus tincidunt, condimentum dolor at, dapibus ex. Nulla a tellus turpis. Aliquam nibh libero, mattis et ultrices pulvinar, commodo id neque. Mauris ornare dui sit amet ornare tristique. Donec ac sem a felis fringilla dictum non feugiat libero. Suspendisse viverra feugiat sollicitudin.<br></br><br></br>

                Curabitur rhoncus arcu gravida molestie ultricies. Duis venenatis nec magna sed porttitor. Aliquam semper felis et turpis bibendum semper. Phasellus non metus sit amet leo laoreet tincidunt. Cras vel porta turpis, id pretium erat. Suspendisse ut semper lacus. Morbi eget suscipit justo. Aliquam sit amet ullamcorper ante, ac tempor odio. Sed eu egestas tortor, vitae cursus nulla. Aenean eu nunc pretium, consequat odio fringilla, condimentum tellus. Cras fringilla tortor sapien, id vehicula lacus aliquam eget.
            </p>
        </Container>
    )
}

export default ExamplePost;