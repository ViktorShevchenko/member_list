<?php

include('database_connection.php');

if (isset($_POST["action"])) {

    $correct_input = ctype_alnum($_POST["first_name"]) && ctype_alnum($_POST["second_name"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);

    if($correct_input) {
        if ($_POST["action"] == "insert") {
            $query = "
            INSERT INTO tbl_sample (first_name, second_name, email) VALUES ('".$_POST["first_name"]."', '".$_POST["second_name"]."', '".$_POST["email"]."')
            ";
            $statement = $connect->prepare($query);
            $statement->execute();
        }
    }
    
    if ($_POST["action"] == "fetch_single") {
        $query = "
        SELECT * FROM tbl_sample WHERE id = '".$_POST["id"]."'
        ";
        $statement = $connect->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll();
        foreach ($result as $row) {
            $output['first_name'] = $row['first_name'];
            $output['second_name'] = $row['second_name'];
            $output['email'] = $row['email'];
        }
        echo json_encode($output);
    }

    if ($_POST["action"] == "update") {
        if($correct_input) {
            $query = "
            UPDATE tbl_sample
            SET first_name = '".$_POST["first_name"]."',
            second_name = '".$_POST["second_name"]."',
            email = '".$_POST["email"]."'
            WHERE id = '".$_POST["hidden_id"]."'
            ";
            $statement = $connect->prepare($query);
            $statement->execute();      
        }
    }

    if ($_POST["action"] == "delete") {
        $query = "DELETE FROM tbl_sample WHERE id = '".$_POST["id"]."'";
        $statement = $connect->prepare($query);
        $statement->execute();
    }
}
