interface UserIdPageProps{
    params:{
        userId:string
    }
}

const UserPage = ({
    params
}:UserIdPageProps) => {
 

  return (
    <div>
      <h1>User ID: {params.userId}</h1>
    </div>
  );
};

export default UserPage;
