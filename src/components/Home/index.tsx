import { useNavigate } from "react-router-dom";
import { ActivityTile, Container, GroupsTile, H3, RankTile, Tiles, WorkoutTile } from "./style";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Tiles>
        <RankTile>
          <H3>
            Overall ranking
          </H3>
        </RankTile>
        <GroupsTile onClick={() => navigate("/groups")}>
          <H3>
            Groups
          </H3>
        </GroupsTile>
        <ActivityTile onClick={() => navigate("/MyUserExercises")}>
          <H3>
            Activity
          </H3>
        </ActivityTile>
      </Tiles>
      <Tiles>
        <WorkoutTile>
          <H3>
            Workout
          </H3>
        </WorkoutTile>
      </Tiles>
    </Container>
  );
}

export default Home;
