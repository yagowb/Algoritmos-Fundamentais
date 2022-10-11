module com.example.javaalgoritmo {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.javaalgoritmo to javafx.fxml;
    exports com.example.javaalgoritmo;
}