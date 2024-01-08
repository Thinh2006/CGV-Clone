import { Button } from "components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NotFoundTemplate = () => {

  const navigate = useNavigate()

  return (
      <NotFoundContainer>      
        <div>
            <div className="container">
                <div className="text">
                    <h1>Page Not Found</h1>
                    <p>
                        We can't seem to find the page you're looking for.
                        Please check the URL for any typos.
                    </p>
                    <Button onClick={()=>navigate('/')}>
                      Go To Homepage
                    </Button>
                </div>
                <div>
                    <img className="image" src="/public/images/notFound.jpeg" />
                </div>
            </div>
        </div>
      </NotFoundContainer>
    );
};

const NotFoundContainer = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        column-gap: 20px;
    }
    .container img {
        width: 420px;
    }
    .text {
        display: block;
        padding: 40px 40px;
        width: 450px;
    }
    .text h1 {
        color: var(--primary-color);
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    .text p {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 1.5rem;
        margin-bottom: 15px;
    }
    button:hover {
      color: var(--primary-color) !important;
      border: 1px solid var(--primary-color) !important;
    }

    /* Responsive */
    @media screen and (max-width: 1024px){
        .text h1 {
            line-height: 40px;
        }
    }
`;