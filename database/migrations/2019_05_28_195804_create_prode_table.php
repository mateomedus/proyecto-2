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
            $table->string('cuartos1')->nullable();
            $table->string('cuartos2')->nullable();
            $table->string('cuartos3')->nullable();
            $table->string('cuartos4')->nullable();
            $table->string('cuartos5')->nullable();
            $table->string('cuartos6')->nullable();
            $table->string('cuartos7')->nullable();
            $table->string('cuartos8')->nullable();
            $table->string('semi1')->nullable();
            $table->string('semi2')->nullable();
            $table->string('semi3')->nullable();
            $table->string('semi4')->nullable();
            $table->string('final1')->nullable();
            $table->string('final2')->nullable();
            $table->string('campeon')->nullable();
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
