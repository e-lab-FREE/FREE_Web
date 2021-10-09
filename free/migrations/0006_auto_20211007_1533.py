# Generated by Django 3.2.6 on 2021-10-07 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('free', '0005_alter_execution_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='execution',
            name='status',
            field=models.CharField(choices=[('C', 'Configured'), ('Q', 'In queue'), ('R', 'Running'), ('E', 'Error'), ('F', 'Finished'), ('A', 'Aborted'), ('T', 'Timeout')], max_length=1, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='result',
            name='result_type',
            field=models.CharField(choices=[('p', 'Partial'), ('f', 'Final')], max_length=1, verbose_name='Result type'),
        ),
        migrations.AlterUniqueTogether(
            name='result',
            unique_together={('result_type', 'execution')},
        ),
    ]
