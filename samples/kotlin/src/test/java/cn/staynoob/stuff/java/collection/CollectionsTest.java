package cn.staynoob.stuff.java.collection;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.groupingBy;
import static org.assertj.core.api.Assertions.assertThat;

class CollectionsTest {

    public static class Employee {

        private String name;
        private String department;
        private int salary;
        private int index;

        public Employee(String name, String department, int salary) {
            this.name = name;
            this.department = department;
            this.salary = salary;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDepartment() {
            return department;
        }

        public void setDepartment(String department) {
            this.department = department;
        }

        public int getSalary() {
            return salary;
        }

        public void setSalary(int salary) {
            this.salary = salary;
        }

        public int getIndex() {
            return index;
        }

        public void setIndex(int index) {
            this.index = index;
        }

    }

    private List<Employee> employees;

    @BeforeEach
    void setUp() {
        this.employees = Arrays.asList(
                new Employee("foo", "IT", 1000),
                new Employee("bar", "IT", 2000),
                new Employee("baz", "HR", 3000),
                new Employee("qux", "HR", 4000)
        );
    }

    private static List<Employee> mapIndexed(List<Employee> employees) {
        return Collections.emptyList();
    }

    private static List<Employee> mapIndexedForLoop(List<Employee> employees) {
        int count = 0;
        for (Employee employee : employees) {
            employee.setIndex(++count);
        }
        return employees;
    }

    private static List<Employee> mapIndexedSlowly(List<Employee> employees) {
        IntStream.range(0, employees.size())
                .forEach(e -> employees.get(e).setIndex(e));
        return employees;
    }

    @Test
    @DisplayName("mapIndexed")
    void test100() {
        List<Employee> res = mapIndexed(this.employees);
        assertThat(res).allMatch(e -> e.index > 0);
    }

    @Test
    @DisplayName("mapIndexed performance")
    void test110() {
        List<Employee> list = IntStream.range(0, 5000)
                .mapToObj(e -> new Employee(String.valueOf(e), "", e))
//                .collect(toList());
                .collect(Collectors.toCollection(LinkedList::new));

        long start = System.currentTimeMillis();

        mapIndexedForLoop(list);
        System.out.println("cost time: " + (System.currentTimeMillis() - start));

        start = System.currentTimeMillis();

        mapIndexedSlowly(list);
        System.out.println("cost time: " + (System.currentTimeMillis() - start));
    }

    private static Map<String, Integer> mapValues(Map<String, List<Employee>> dep_emp_map) {
        return Collections.emptyMap();
    }

    @Test
    @DisplayName("mapValues")
    void test200() {
        Map<String, Integer> expected = new HashMap<>();
        expected.put("IT", 2000);
        expected.put("HR", 4000);

        Map<String, Integer> res = mapValues(
                this.employees.stream().collect(groupingBy(Employee::getDepartment))
        );

        assertThat(res).isEqualTo(expected);
    }

    private static Map<String, Integer> groupBy(List<Employee> employees) {
//        Map<String, Employee> map  = employees.stream()
//                .collect(groupingBy(Employee::getDepartment));

        return Collections.emptyMap();
    }

    @Test
    @DisplayName("groupBy")
    void test300() {
        Map<String, Integer> expected = new HashMap<>();
        expected.put("IT", 2000);
        expected.put("HR", 4000);

        Map<String, Integer> res = groupBy(this.employees);

        assertThat(res).isEqualTo(expected);
    }


}