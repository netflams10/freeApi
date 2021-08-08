<?php

    namespace App\Concerns;

    use Illuminate\Support\Str;

    trait UseUuid {

        /**
         * Boot function from Laravel.
         */
        protected static function boot()
        {
            parent::boot();
            static::creating(function ($model) {
                if (empty($model->{$model->getKeyName()})) {
                    $model->{$model->getKeyName()} = Str::uuid()->toString();
                }
            });
        }

        public function getIncrementing()
        {
            return false;
        }

        public function getKeyType()
        {
            return 'string';
        }
    }
