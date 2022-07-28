import styled from "styled-components";

export const MoviesContainer = styled.section`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  align-items:stretch;
  align-content:flex-start;
  flex-shrink:2;
  flex-grow:0;
  padding:10px 20px;
  @media only screen and (max-width: 376px) {
    padding:10px 5px;
  }
`;

export const MoviesError = styled.div`
  color: ${({ theme }) => theme.lightColor};
  font-size: ${({ theme }) => theme.fontSize * 4}px;
  background: ${({ theme }) => theme.dangerColor};
  align-self: center;
  display: inline-block;
  text-align: center;
  padding: 4px;
  animation: fadeAnimation 1.5s ease-out infinite;
  border-radius: 10px;

  @keyframes fadeAnimation {
    0% {
      background: transparent;
      color: ${({ theme }) => theme.dangerColor};
    }
    50% {
      background: ${({ theme }) => theme.dangerColor};
      color: ${({ theme }) => theme.lightColor};
    }
    100% {
      background: transparent;
      color: ${({ theme }) => theme.dangerColor};
    }
  }
`;

const Skeleton = styled.div`
  box-shadow: 0 0 30px 2px gray;
  background-color: ${({ theme }) => theme.lightColor};
  border-radius: 10px;
  width: 300px;
  height: 400px;
  margin:15px;
  background-image: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size: 100% 100%, 100% 50%, 90% 30px;
  background-position: -300px 0, 0 0, 50% 60%;
  animation: loading 1.5s infinite;
  @media only screen and (max-width: 376px) {
    width:250px;
    height:150px;
    background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee);
    background-size:60% 100%, 40% 100%;
    background-position:-250px 0, 100% 0%;
    animation:smallLoading 1.5s infinite;
    /* animation:none; */
  }
  @keyframes loading {
    to {
      background-position: 300px 0, 0 0, 50% 60%;
    }
  }
  @keyframes smallLoading {
    to {
      background-position:250px 0, 100% 0;
    }
  }
`;

const SkeletonContainer = () => {
  return (
    <>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </>
  );
};

export const LoadingSkeleton = () => {
  return <SkeletonContainer></SkeletonContainer>;
};