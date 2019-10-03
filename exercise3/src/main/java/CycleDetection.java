import java.util.List;

public class CycleDetection {
    public boolean isCycle(List<Vertex> vertexList) {

        for(Vertex vertex : vertexList) {

            if( !vertex.isVisited() ){
                return dfsCheckCycle(vertex);
            }
        }
        return false;
    }

    private boolean dfsCheckCycle(Vertex vertex) {

        for(Edge edge : vertex.getAdjacenciesList()){
            if( edge.getTargetVertex().isVisited() ){
                return true;
            }
            if( !edge.getTargetVertex().isVisited() ){
                edge.getTargetVertex().setVisited(true);
                return dfsCheckCycle(edge.getTargetVertex());
            }
        }

//        System.out.println("Set vertex "+vertex+" setBeingVisited(false) and visited(true)");
        vertex.setBeingVisited(false);
        vertex.setVisited(true);
        return false;

    }
}
