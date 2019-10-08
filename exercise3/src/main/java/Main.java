import java.util.*;


public class Main {
    public static void main(String[] args) {

            Vertex vertex0 = new Vertex("A");
            Vertex vertex1 = new Vertex("B");
            Vertex vertex2 = new Vertex("C");
            Vertex vertex3 = new Vertex("D");


            List<Vertex> vertexList = new ArrayList();
            vertexList.add(vertex0);
            vertexList.add(vertex1);
            vertexList.add(vertex2);
            vertexList.add(vertex3);

            List<Vertex> vertexListCheckCycle = new ArrayList<Vertex>();
            Collections.copy(vertexList, vertexListCheckCycle);

            vertex0.addNeighbour(new Edge(3, vertex0, vertex1));
            vertex0.addNeighbour(new Edge(3, vertex0, vertex2));
            vertex0.addNeighbour(new Edge(11, vertex0, vertex3));

            vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
            vertex1.addNeighbour(new Edge(2, vertex1, vertex2));



            CycleDetection cycleDetect = new CycleDetection();
            if(cycleDetect.isCycle(vertexListCheckCycle)) {
                    System.out.println("Has cycle");
            }else {
                    AcyclicLongestPath acyclicShortestPath = new AcyclicLongestPath();
                acyclicShortestPath.longestPath(vertexList, vertex0);
            }

            }
}