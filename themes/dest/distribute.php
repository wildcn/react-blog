<?php
add_action('admin_menu', 'create_meta_box');   
//在加载管理员界面界面的时候调用create_meta_box函数   
add_action('save_post', 'save_postdata');   
//在保存文章的时候调用save_postdata函数  


$new_meta_box = array(   
	"anli_open" => array(   
	    "name"=>"anli_open",   
	    "std"=>"是否启用案例模板",   
	    "type" => 'ratio',
	    "title"=>"勾选则会填写案例模板数据" ,
        "cos"=>0
	),
	"anli_industry" => array(   
	    "name"=>"anli_industry", 
	    "type" => 'textarea',
	    "title" => '行业',
	    "std"=>"互联网",   
        "class" => 'td',
        "cos"=>20
	),
    "anli_staff_number" => array(   
        "name"=>"anli_staff_number", 
        "type" => 'textarea',
        "title" => '员工人数',
        "std"=>"0",   
        "class" => 'td',
        "cos"=>20
    ),
    "anli_service_area" => array(   
        "name"=>"anli_service_area", 
        "type" => 'textarea',
        "title" => '服务面积',
        "std"=>"1000平方米",   
        "class" => 'td',
        "cos"=>20
    ),
    "anli_type" => array(   
        "name"=>"anli_type", 
        "type" => 'textarea',
        "title" => '服务品类',
        "std"=>"家居清洁",   
        "class" => 'td',
        "cos"=>20
    ),
    "anli_headImg" => array(   
        "name"=>"anli_headImg", 
        "type" => 'upload',
        "title" => '顶部大图（1158X448）',
        // "std"=>"图片尺寸",  
        "allow_add" => '',
        "btn_txt" =>'上传大图', 
        "cos"=>0
    ),
    "anli_logo" => array(   
        "name"=>"anli_logo", 
        "type" => 'upload',
        "title" => 'logo',
        // "std"=>"图片尺寸",  
        "allow_add" => '',
        "btn_txt" =>'logo', 
        "cos"=>0
    ),
    "anli_shigong_img" => array(   
        "name"=>"anli_shigong_img", 
        "type" => 'upload',
        "title" => '施工现场图（比例推荐4X3）',
        "btn_txt" =>'上传施工图', 
        "allow_add" => 'allow_add',
        "cos"=>0
    ),

);  

function create_meta_box(){   
    //先判断函数是否存在   
    if(function_exists('add_meta_box')){   
        //add_meta_box函数在文章编辑页面内添加版块，具体用法放在文章最后   
        add_meta_box('new-meta-box','案例模板','new_meta_box','post','normal','high');   
        //此函数调用new_meta_box函数   
    }   
}

function new_meta_box(){   
    global $post,$new_meta_box;   

    echo '<div class="custom-anli">';
    foreach($new_meta_box as $meta_box){   
        $meta_box_value = get_post_meta($post->ID, $meta_box['name'].'_value', true); 
        $meta_box['cos'] = $meta_box['cos']? $meta_box['cos']:60;
        
        if($meta_box['class'] === 'td'){
            echo '<div class="custom-item anli-item">';
        }else{
            echo '<div class="anli-item" >';    
        }
        if($meta_box_value == "")   
            $meta_box_value = $meta_box['std'];   
        echo '<input type="hidden" name="'.$meta_box['name'].'_noncename" id="'.$mata_box['name'].'_noncename" value="'.wp_create_nonce( plugin_basename(__FILE__) ).'"/>';   
        echo '<h4>'.$meta_box['title'].'</h4>';   
        if ($meta_box['type'] === 'ratio') {
        	echo '<input type="radio" name="'.$meta_box['name'].'_value" />'.$meta_box_value.'<br/>';   
        }else if($meta_box['type'] === 'textarea'){
        	echo '<textarea cols="'.$meta_box['cos'].'" rows="1" name="'.$meta_box['name'].'_value">'.$meta_box_value.'</textarea>'; 
        }else if($meta_box['type'] === 'upload'){
            echo '<a href="#" id="'.$meta_box['name'].'upload" class="button button-primary anli-upload '.$meta_box['allow_add'].'">'.$meta_box['btn_txt'].'</a><br/><textarea class="undis" cols="'.$meta_box['cos'].'" rows="1" name="'.$meta_box['name'].'_value">'.$meta_box_value.'</textarea>'; 
        }

        echo '</div>';

        // echo '<h4>'.$meta_box['title'].'</h4><input type="radio" checked="'.$meta_box['name'].'"/><br/>'；
    }   
    echo '</div>';
}

function save_postdata($post_id){   
    global $post,$new_meta_box;   
    foreach($new_meta_box as $meta_box){   
        if(!wp_verify_nonce( $_POST[$meta_box['name'].'_noncename'], plugin_basename(__FILE__) )){   
            return $post_id;   
        }   
        if('page' == $_POST['post_type']){   
            if(!current_user_can( 'edit_page', $post_id ))   
                return $post_id;   
        }else{   
            if(!current_user_can( 'edit_post', $post_id ))   
                return $post_id;   
        }   
        $data = $_POST[$meta_box['name'].'_value'];   
        if(get_post_meta($post_id, $meta_box['name'].'_value') == "")   
            add_post_meta($post_id, $meta_box['name'].'_value', $data, true);   
        elseif($data != get_post_meta($post_id, $meta_box['name'].'_value', true))   
            update_post_meta($post_id, $meta_box['name'].'_value', $data);   
        elseif($data == "")   
            delete_post_meta($post_id, $meta_box['name'].'_value', get_post_meta($post_id, $meta_box['name'].'_value', true));   
    }   
}
?>