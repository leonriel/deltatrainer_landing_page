import React, { useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import HeaderIndex from './header/index';
import PostLink from './post_link/post_link';
import howQuicklyDoYouLoseMuscle from '../../media/blog/how-fast-will-you-lose-muscle (1).jpg';
import whyWomenNeedToStartStrengthTrainingNow from '../../media/home/woman_lifting.jpg';
import doINeedAPersonalTrainer from '../../media/blog/do_i_need_a_personal_trainer.png';
import homeGymEssentials from '../../media/blog/home-gym-essentials.jpeg';
import healthAndWellnessBenefits from '../../media/blog/benefits.jpeg';

const BlogIndex = () => {
    const useSetState = (initialState:any) => {
        const [state, setState] = useState(initialState);
      
        const getState = async () => {
          let state;
      
          await setState((currentState:any) => {
            state = currentState;
      
            return currentState;
          });
      
          return state;
        };
      
        return [state, setState, getState];
    };

    const [items, setItems] = useState([] as any[]);
    const [active, setActive, getActive] = useSetState(1);

    const resetActive = async (e:any, index:any) => {
        e.preventDefault();
        
        setActive(index);

        var firstItemToDisplay = index * 8 - 8;
        var lastItemToDisplay = index * 8;

        var childCount = document.getElementById("blog-container")!.childElementCount;

        if (firstItemToDisplay < 0) {
            return;
        }

        if (firstItemToDisplay >= childCount) {
            return;
        }

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        if (lastItemToDisplay > childCount) {
            lastItemToDisplay = childCount;
        }

        for (var i = 0; i < childCount; i++) {
            var oneChild = document.getElementById("blog-container")!.children[i] as HTMLElement;
            oneChild.style.display = "none";
        }

        for (var i = firstItemToDisplay; i < lastItemToDisplay; i++) {
            var oneChild = document.getElementById("blog-container")!.children[i] as HTMLElement;
            oneChild.style.display = "block";
        }

        var activeIndex = await getActive();

        var list : any[] = [];
        
        var paginationItemCount = Math.ceil(document.getElementById("blog-container")!.childElementCount / 8);
        for (let i = 1; i <= paginationItemCount; i++) {
            list.push(
                <Pagination.Item key={i} active={i === activeIndex} onClick={(e) => resetActive(e, i)}>
                    {i}
                </Pagination.Item>
            );
        }

        if (paginationItemCount > 3) {
            list.splice(0, 0, <Pagination.Prev onClick={(e) => resetActive(e, activeIndex - 1)} />);
            list.splice(paginationItemCount + 1, 0, <Pagination.Next onClick={(e) => resetActive(e, activeIndex + 1)} />);
            if (activeIndex === 1 || activeIndex === 2 || activeIndex === 3) {
                list.splice(4, paginationItemCount - 4, <Pagination.Ellipsis />);
                setItems(list);
                return;
            }
            if (activeIndex === paginationItemCount - 2 || activeIndex === paginationItemCount - 1 || activeIndex === paginationItemCount) {
                console.log(activeIndex);
                list.splice(2, paginationItemCount - 4, <Pagination.Ellipsis />);
                setItems(list);
                return;
            }
            if (activeIndex + 1 < paginationItemCount) {
                list.splice(activeIndex + 1, paginationItemCount - (activeIndex + 1), <Pagination.Ellipsis />);
            }
            if (activeIndex > 2) {
                list.splice(2, activeIndex - 2, <Pagination.Ellipsis />);
            }
        }

        setItems(list);
    }

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        var childCount = document.getElementById("blog-container")!.childElementCount;

        if (childCount < 8) {
            for (var i = 0; i < childCount; i++) {
                var oneChild = document.getElementById("blog-container")!.children[i] as HTMLElement;
                oneChild.style.display = "block";
            }
        } else {
            for (var i = 0; i < 8; i++) {
                var oneChild = document.getElementById("blog-container")!.children[i] as HTMLElement;
                oneChild.style.display = "block";
            }
        }

        var list : any[] = [];
        var paginationItemCount = Math.ceil(childCount / 8);

        for (let i = 1; i <= paginationItemCount; i++) {
            list.push(
                <Pagination.Item key={i} active={i === active} onClick={(e) => resetActive(e, i)}>
                    {i}
                </Pagination.Item>
            );
        }

        if (paginationItemCount > 3) {
            list.splice(0, 0, <Pagination.Prev />);
            list.splice(paginationItemCount + 1, 0, <Pagination.Next onClick={(e) => resetActive(e, active + 1)} />);
            list.splice(4, paginationItemCount - 4, <Pagination.Ellipsis />);
        }
        
        setItems(list);
    }, []);

    return (
        <div>
            <HeaderIndex/>
            <Container fluid id="blog-container" className="mb-5 d-flex blog-container" style={{flexFlow: "row wrap", justifyContent: "space-between"}}>
                    <PostLink path="/10-corporate-health-and-wellness-benefits-pandemic-era-&-beyond" src={healthAndWellnessBenefits} alt="Woman in excercise attire using a yoga ball" title="10 Corporate Health and Wellness Benefits-Pandemic Era & Beyond" author="Daniel G." date="March 9, 2021" width={7} />
                    <PostLink path="/home-gym-essentials" src={homeGymEssentials} alt="Various gym equipment" title="Home Gym Essentials" author="John L." date="February 16, 2021" width={4} />
                    <PostLink path="/do-i-need-a-personal-trainer" src={doINeedAPersonalTrainer} alt="Trainer assisting a client" title="Do I Need A Personal Trainer?" author="David S." date="February 15, 2021" width={4} />
                    <PostLink path="/why-women-need-to-start-strength-training-now" src={whyWomenNeedToStartStrengthTrainingNow} alt="Woman lifting a dumbbell" title="Why Women Need to Start Strength Training Now!" author="S.T." date="February 9, 2021" width={7} />
                    <PostLink path="/how-quickly-do-you-lose-muscle" src={howQuicklyDoYouLoseMuscle} alt="Two men with their upper arm muscles showing" title="How Quickly Do You Lose Muscle?" author="Patrick D." date="February 9, 2021" width={7} />
            </Container>
            <Container className="my-5">
                <Pagination>{items}</Pagination>
            </Container>
        </div>
    )
}

export default BlogIndex;