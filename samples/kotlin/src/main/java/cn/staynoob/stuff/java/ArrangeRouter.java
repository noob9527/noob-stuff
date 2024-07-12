package cn.staynoob.stuff.java;

public class ArrangeRouter {

    public static void arrange(int task_id) {
        if (AdvisorClassifier.isCnAdvisor(task_id)) {
            System.out.println("arrange CN advisor");
        } else {
            System.out.println("arrange US advisor");
        }
    }

}
