import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Stack;

public class AcyclicLongestPath {
    public void longestPath(List<Vertex> vertexList, Vertex sourceVertex){

        sourceVertex.setMaxDistance(0);
        TopologicalSort topologicalSort = new TopologicalSort();
        topologicalSort.makeTopologicalOrder(vertexList);

        Stack<Vertex> stack = topologicalSort.getTopologicalOrder();

        for(Vertex actualVertex : stack){


            for(Edge edge : actualVertex.getAdjacenciesList()){

                Vertex u = edge.getStartVertex();
                Vertex v = edge.getTargetVertex();

                double newDistance = u.getMaxDistance() +  edge.getWeight();

                if( newDistance > v.getMaxDistance() ){
                    v.setMaxDistance(newDistance);
                    v.setPredecessor(u);
                }
            }
        }
        Vertex vertexHasMaxDist = vertexList.stream().max(Comparator.comparing(Vertex::getMaxDistance)).orElseThrow(NoSuchElementException::new);
        System.out.println("Longest path: "+vertexHasMaxDist.getMaxDistance());


    }
}
