# Generated by Django 3.2.12 on 2022-06-10 18:29

import cvat.apps.engine.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0053_data_deleted_frames'),
    ]

    operations = [
        migrations.CreateModel(
            name='Storage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(choices=[('cloud_storage', 'CLOUD_STORAGE'), ('local', 'LOCAL')], default=cvat.apps.engine.models.Location['LOCAL'], max_length=16)),
                ('cloud_storage_id', models.IntegerField(blank=True, default=None, null=True)),
            ],
            options={
                'default_permissions': (),
            },
        ),
        migrations.AddField(
            model_name='job',
            name='updated_date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='project',
            name='source_storage',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='engine.storage'),
        ),
        migrations.AddField(
            model_name='project',
            name='target_storage',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='engine.storage'),
        ),
        migrations.AddField(
            model_name='task',
            name='source_storage',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='engine.storage'),
        ),
        migrations.AddField(
            model_name='task',
            name='target_storage',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='engine.storage'),
        ),
    ]
