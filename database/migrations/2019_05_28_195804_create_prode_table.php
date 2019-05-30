<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProdeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prode', function (Blueprint $table) {
            $table->bigIncrements('id');   
            $table->string('cuartos1');
            $table->string('cuartos2');
            $table->string('cuartos3');
            $table->string('cuartos4');
            $table->string('semi1');
            $table->string('semi2');
            $table->string('final');
            $table->string('campeon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prode');
    }
}
