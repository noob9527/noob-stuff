package cn.staynoob.stuff.kotlin.collection

import cn.staynoob.stuff.java.generic.Console
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import java.util.*

internal class CollectionsTest {

    private lateinit var employees: List<Employee>

    class Employee(
        var name: String,
        var department: String,
        var salary: Int
    ) {
        var displayOrder: Int = 0
    }

    @BeforeEach
    fun setUp() {
        this.employees = Arrays.asList(
            Employee("foo", "IT", 1000),
            Employee("bar", "IT", 2000),
            Employee("baz", "HR", 3000),
            Employee("qux", "HR", 4000)
        )
    }

    private fun mapIndexed(employees: List<Employee>): List<Employee> {
        return emptyList()
    }

    @Test
    @DisplayName("mapIndexed")
    fun test100() {
        val res = mapIndexed(this.employees)
        assertThat(res).allMatch { e -> e.displayOrder > 0 }
    }

    private fun mapValues(dep_emp_map: Map<String, List<Employee>>): Map<String, Int> {
        return emptyMap()
    }

    @Test
    @DisplayName("mapValues")
    fun test200() {
        val expected = HashMap<String, Int>()
        expected["IT"] = 2000
        expected["HR"] = 4000

        val res = mapValues(
            this.employees.groupBy { it.department }
        )

        assertThat(res).isEqualTo(expected)
    }

    private fun groupBy(employees: List<Employee>): Map<String, Int> {
        return emptyMap()
    }

    @Test
    @DisplayName("groupBy")
    fun test300() {
        val expected = HashMap<String, Int>()
        expected["IT"] = 2000
        expected["HR"] = 4000

        val res = groupBy(this.employees)

        assertThat(res).isEqualTo(expected)
    }

}