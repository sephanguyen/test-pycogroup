
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class TestMain {

    @Test
    public void testCyclePath()
    {

        Vertex vertex0 = new Vertex("A");
        Vertex vertex1 = new Vertex("B");
        Vertex vertex2 = new Vertex("C");
        Vertex vertex3 = new Vertex("D");


        List<Vertex> vertexList = new ArrayList();
        vertexList.add(vertex0);
        vertexList.add(vertex1);
        vertexList.add(vertex2);
        vertexList.add(vertex3);

        vertex0.addNeighbour(new Edge(3, vertex0, vertex1));
        vertex0.addNeighbour(new Edge(3, vertex0, vertex2));

        vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
        vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
        vertex1.addNeighbour(new Edge(11, vertex1, vertex3));

        vertex2.addNeighbour(new Edge(1, vertex2, vertex0));




        CycleDetection cycleDetect = new CycleDetection();

        assertEquals(true, cycleDetect.isCycle(vertexList));

    }

    @Test
    public void testPathMaxiMize()
    {

        Vertex vertex0 = new Vertex("A");
        Vertex vertex1 = new Vertex("B");
        Vertex vertex2 = new Vertex("C");
        Vertex vertex3 = new Vertex("D");


        List<Vertex> vertexList = new ArrayList();
        vertexList.add(vertex0);
        vertexList.add(vertex1);
        vertexList.add(vertex2);
        vertexList.add(vertex3);

        vertex0.addNeighbour(new Edge(3, vertex0, vertex1));
        vertex0.addNeighbour(new Edge(3, vertex0, vertex2));

        vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
        vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
        vertex1.addNeighbour(new Edge(11, vertex1, vertex3));

        Double expectedWeigth = 14.0;
        AcyclicLongestPath acyclicShortestPath = new AcyclicLongestPath();

        assertEquals(expectedWeigth, acyclicShortestPath.longestPath(vertexList, vertex0));

    }

    @Test
    public void testPathMaxiMize2()
    {

        Vertex vertex0 = new Vertex("A");
        Vertex vertex1 = new Vertex("B");
        Vertex vertex2 = new Vertex("C");
        Vertex vertex3 = new Vertex("D");


        List<Vertex> vertexList = new ArrayList();
        vertexList.add(vertex0);
        vertexList.add(vertex1);
        vertexList.add(vertex2);
        vertexList.add(vertex3);

        vertex0.addNeighbour(new Edge(3, vertex0, vertex1));
        vertex0.addNeighbour(new Edge(3, vertex0, vertex2));

        vertex1.addNeighbour(new Edge(2, vertex1, vertex2));
        vertex1.addNeighbour(new Edge(11, vertex1, vertex3));

        vertex2.addNeighbour(new Edge(7, vertex2, vertex3));


        Double expectedWeigth = 14.0;
        AcyclicLongestPath acyclicShortestPath = new AcyclicLongestPath();

        assertEquals(expectedWeigth, acyclicShortestPath.longestPath(vertexList, vertex0));

    }

}
